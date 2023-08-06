"""
The sync module is responsible for syncing the results of feed parsers to the database.

This involves:

- Persisting entities in the feed that don't correspond to existing entities.

- Updating existing entities with new data in the feed. In certain cases, for example
    Trips, old data such as past arrival times is preserved.

- Deleting existing entities that no longer appear in the feed.
"""
import collections
import dataclasses
import logging
import typing
from typing import Iterable, List, Tuple

from transiter import parse
from transiter.db import (
    dbconnection,
    models,
)
from transiter.db.models import updatableentity
from transiter.db.queries import (
    feedqueries,
    genericqueries,
    tripqueries,
    stopqueries,
    routequeries,
    schedulequeries,
    systemqueries,
)
from transiter.import_ import fastscheduleoperations
from transiter.services.servicemap import servicemapmanager

logger = logging.getLogger(__name__)


def run_import(feed_update_pk, parser_object: parse.TransiterParser):
    """
    Sync entities to the database.

    :param feed_update_pk: the feed update event in which this sync operation is being
      performed
    :param parser_object: the parser object
    """
    feed_update = feedqueries.get_update_by_pk(feed_update_pk)

    syncers_in_order = [
        AgencySyncer,
        RouteSyncer,
        StopSyncer,
        ScheduleSyncer,
        DirectionRuleSyncer,
        TripSyncer,
        VehicleImporter,
        AlertSyncer,
    ]
    if feed_update.update_type == feed_update.Type.FLUSH:
        syncers_in_order.reverse()

    totals = [0, 0, 0]
    for syncer_class in syncers_in_order:
        if syncer_class.feed_entity() not in parser_object.supported_types:
            continue
        logger.debug("Syncing {}".format(syncer_class.feed_entity()))
        entities = list(parser_object.get_entities(syncer_class.feed_entity()))
        for entity in entities:
            entity.source_pk = feed_update.pk
        result = syncer_class(feed_update).run(entities)
        for i in range(3):
            totals[i] += result[i]
    return tuple(totals)


class SyncerBase:

    __feed_entity__ = None
    __db_entity__ = None

    def __init__(self, feed_update: models.FeedUpdate):
        self.feed_update = feed_update

    def run(self, entities):
        self.pre_sync()
        if len(entities) > 0:
            num_added, num_updated = self.sync(entities)
        else:
            num_added, num_updated = 0, 0
        num_deleted = self.delete_stale_entities()
        self.post_sync()
        return num_added, num_updated, num_deleted

    def pre_sync(self):
        pass

    def sync(self, entities):
        raise NotImplementedError  # pragma: no cover

    def delete_stale_entities(self):
        """
        Remove stale entities from the database.

        A stale entity is currently defined as an entity that was most recently added or
        updated by the feed associated to the current feed update, but that was not
        contained in the current feed update. I.e., it is an entity which previously
        appeared in the current feed of interest but has since disappeared.
        """
        assert self.__db_entity__ is not None
        session = dbconnection.get_session()
        entities_to_delete = genericqueries.list_stale_entities(
            self.__db_entity__, self.feed_update
        )
        for entity in entities_to_delete:
            session.delete(entity)
        return len(entities_to_delete)

    def post_sync(self):
        pass

    @classmethod
    def feed_entity(cls):
        return cls.__feed_entity__

    def _merge_entities(self, entities) -> Tuple[list, int, int]:
        """
        Merge entities of a given type into the session.

        This function will merge entities such that, for example, an existing Alert in
        the feed will not be added but instead its preexisting DB version will be updated.

        :param entities: the entities to merge
        :return: the persisted entities
        """

        persisted_entities = []
        id_to_pk = self._get_id_to_pk_map()
        session = dbconnection.get_session()
        num_updated_entities = 0
        for entity in entities:
            if entity.id in id_to_pk:
                num_updated_entities += 1
                entity.pk = id_to_pk[entity.id]
            entity.source_pk = self.feed_update.pk
            persisted_entities.append(session.merge(entity))
        return (
            persisted_entities,
            len(entities) - num_updated_entities,
            num_updated_entities,
        )

    def _get_id_to_pk_map(self):
        return genericqueries.get_id_to_pk_map(
            self.__db_entity__, self.feed_update.feed.system.pk
        )


def syncer(entity_type) -> typing.Type[SyncerBase]:
    class _Syncer(SyncerBase):
        __db_entity__ = entity_type
        __feed_entity__ = updatableentity.get_feed_entity(entity_type)

        def sync(self, entities):
            raise NotImplementedError

    return _Syncer


class AgencySyncer(syncer(models.Agency)):
    def sync(self, parsed_agencies):
        agencies = list(map(models.Agency.from_parsed_agency, parsed_agencies))
        for agency in agencies:
            agency.system_pk = self.feed_update.feed.system_pk
            # TODO: set the system timezone to be equal to the agency timezone
        __, num_added, num_updated = self._merge_entities(agencies)
        return num_added, num_updated


class RouteSyncer(syncer(models.Route)):
    def sync(self, parsed_routes):
        agency_id_to_pk = genericqueries.get_id_to_pk_map(
            models.Agency, self.feed_update.feed.system.pk
        )
        routes = []
        for parsed_route in parsed_routes:
            route = models.Route.from_parsed_route(parsed_route)
            route.system_pk = self.feed_update.feed.system_pk
            route.agency_pk = agency_id_to_pk.get(parsed_route.agency_id)
            routes.append(route)
        __, num_added, num_updated = self._merge_entities(routes)
        return num_added, num_updated


class StopSyncer(syncer(models.Stop)):
    def sync(self, parsed_stops: typing.Iterable[parse.Stop]):
        # NOTE: the stop tree is manually linked together because otherwise SQL
        # Alchemy's cascades will result in duplicate entries in the DB because the
        # models do not have PKs yet.
        stop_id_to_parent_stop_id = {}
        stops = []
        for parsed_stop in parsed_stops:
            stop = models.Stop.from_parsed_stop(parsed_stop)
            stop.system_pk = self.feed_update.feed.system_pk
            if parsed_stop.parent_stop is not None:
                stop_id_to_parent_stop_id[parsed_stop.id] = parsed_stop.parent_stop.id
            else:
                stop_id_to_parent_stop_id[parsed_stop.id] = None
            stops.append(stop)
        persisted_stops, num_added, num_updated = self._merge_entities(stops)
        stop_id_to_persisted_stops = {stop.id: stop for stop in persisted_stops}

        # NOTE: flush the session the session to populate the primary keys
        dbconnection.get_session().flush()
        for stop_id in stop_id_to_parent_stop_id.keys():
            stop = stop_id_to_persisted_stops[stop_id]
            parent_stop = stop_id_to_persisted_stops.get(
                stop_id_to_parent_stop_id.get(stop.id)
            )
            if parent_stop is not None:
                stop.parent_stop_pk = parent_stop.pk
            else:
                stop.parent_stop_pk = None
        return num_added, num_updated


class ScheduleSyncer(syncer(models.ScheduledService)):

    recalculate_service_maps = False

    def pre_sync(self):
        num_entities_deleted = fastscheduleoperations.delete_trips_associated_to_feed(
            self.feed_update.feed.pk
        )
        if num_entities_deleted > 0:
            self.recalculate_service_maps = True

    def sync(self, parsed_services):
        persisted_services, num_added, num_updated = self._merge_entities(
            list(map(models.ScheduledService.from_parsed_service, parsed_services))
        )
        for service in persisted_services:
            service.system = self.feed_update.feed.system
        schedule_updated = fastscheduleoperations.sync_trips(
            self.feed_update, parsed_services
        )
        if schedule_updated:
            self.recalculate_service_maps = True
        return num_added, num_updated

    def post_sync(self):
        if not self.recalculate_service_maps:
            return
        servicemapmanager.calculate_scheduled_service_maps_for_system(
            self.feed_update.feed.system
        )


class DirectionRuleSyncer(syncer(models.DirectionRule)):
    def sync(self, parsed_direction_rules):
        stop_id_to_pk = stopqueries.get_id_to_pk_map_in_system(
            self.feed_update.feed.system.pk
        )
        entities_to_merge = []
        for parsed_direction_rule in parsed_direction_rules:
            direction_rule = models.DirectionRule.from_parsed_direction_rule(
                parsed_direction_rule
            )
            stop_pk = stop_id_to_pk.get(parsed_direction_rule.stop_id)
            if stop_pk is None:
                continue
            direction_rule.stop_pk = stop_pk
            entities_to_merge.append(direction_rule)

        __, num_added, num_updated = self._merge_entities(entities_to_merge)
        return num_added, num_updated

    def _get_id_to_pk_map(self):
        return genericqueries.get_id_to_pk_map_by_feed_pk(
            self.__db_entity__, self.feed_update.feed.pk
        )


@dataclasses.dataclass
class _TripStopTime(parse.TripStopTime):
    pk: int = None
    stop_pk: int = None
    trip_pk: int = None
    is_from_parsing: bool = True

    def is_new(self):
        return self.pk is None

    def to_db_mapping(self):
        result = dataclasses.asdict(self)
        del result["stop_id"]
        del result["is_from_parsing"]
        if not self.is_from_parsing:
            null_keys = {key for key, value in result.items() if value is None}
            for null_key in null_keys:
                del result[null_key]
        if self.is_new():
            del result["pk"]
        return result


@dataclasses.dataclass
class _Trip(parse.Trip):
    pk: int = None
    route_pk: int = None
    source_pk: int = None
    stop_times: typing.List[_TripStopTime] = dataclasses.field(default_factory=list)

    @classmethod
    def from_parsed_trip(cls, parsed_trip: parse.Trip) -> "_Trip":
        parsed_trip_dict = dataclasses.asdict(parsed_trip)
        parsed_stop_times_dict = parsed_trip_dict.pop("stop_times")
        return cls(
            **parsed_trip_dict,
            stop_times=[
                _TripStopTime(**parsed_stop_time_dict, is_from_parsing=True)
                for parsed_stop_time_dict in parsed_stop_times_dict
            ]
        )

    def is_new(self):
        return self.pk is None

    def to_db_mapping(self):
        result = {
            "pk": self.pk,
            "id": self.id,
            "route_pk": self.route_pk,
            "source_pk": self.source_pk,
            "direction_id": self.direction_id,
            "started_at": self.start_time,
            "updated_at": self.updated_at,
            "delay": self.delay,
        }
        if self.is_new():
            del result["pk"]
        return result


class TripSyncer(syncer(models.Trip)):

    route_pk_to_previous_service_map_hash = {}
    route_pk_to_new_service_map_hash = {}
    stop_time_pks_to_delete = set()

    def sync(self, parsed_trips):
        trips = map(_Trip.from_parsed_trip, parsed_trips)
        # TODO: localize the trip start time
        for data_adder in (
            self._add_source,
            self._add_schedule_data,  # Must come before route data
            self._add_route_data,
            self._add_stop_data,  # Must come before existing trip data
            self._add_existing_trip_data,
        ):
            trips = data_adder(trips)
        self._calculate_route_pk_to_new_service_map_hash(trips)
        return self._fast_merge(trips)

    def _add_source(self, trips: Iterable[_Trip]) -> Iterable[_Trip]:
        for trip in trips:
            trip.source_pk = self.feed_update.pk
            yield trip

    def _add_schedule_data(self, trips: Iterable[_Trip]) -> Iterable[_Trip]:
        """
        Add data to the trip, such as the route, from the schedule.
        """
        trips = list(trips)
        trip_ids_needing_schedule = set()
        for trip in trips:
            route_set = trip.route_id is not None
            direction_id_set = trip.direction_id is not None
            if route_set and direction_id_set:
                continue
            trip_ids_needing_schedule.add(trip.id)
        if len(trip_ids_needing_schedule) == 0:
            return trips
        trip_id_to_scheduled_trip = {
            trip.id: trip
            for trip in schedulequeries.list_trips_by_system_pk_and_trip_ids(
                self.feed_update.feed.system.pk, trip_ids_needing_schedule
            )
        }
        for trip in trips:
            scheduled_trip = trip_id_to_scheduled_trip.get(trip.id)
            if scheduled_trip is None:
                continue
            trip.route_pk = scheduled_trip.route_pk
            if trip.direction_id is None:
                trip.direction_id = scheduled_trip.direction_id
        return trips

    def _add_route_data(self, trips: Iterable[_Trip]) -> Iterable[_Trip]:
        """
        Convert route_ids on the trip into route_pks. Trips that are have invalid
        route IDs and are missing route PKs are filtered out.
        """
        trips = list(trips)
        route_id_to_pk = routequeries.get_id_to_pk_map_in_system(
            self.feed_update.feed.system.pk,
            [trip.route_id for trip in trips if trip.route_id is not None],
        )
        for trip in trips:
            if trip.route_pk is None:
                trip.route_pk = route_id_to_pk.get(trip.route_id)
                if trip.route_pk is None:
                    continue
            yield trip

    def _add_stop_data(self, trips: Iterable[_Trip]) -> Iterable[_Trip]:
        """
        Convert stop_ids on the trip stop times into stop_pks. Trip stop times that have
        invalid stop IDs and are missing stop PKs are filtered out.
        """
        stop_id_to_pk = stopqueries.get_id_to_pk_map_in_system(
            self.feed_update.feed.system.pk
        )

        def process_stop_times(stop_times):
            for stop_time in stop_times:
                stop_pk = stop_id_to_pk.get(stop_time.stop_id, None)
                if stop_pk is None:
                    continue
                stop_time.stop_pk = stop_pk
                yield stop_time

        for trip in trips:
            trip.stop_times = list(process_stop_times(trip.stop_times))
            yield trip

    def _add_existing_trip_data(self, trips: Iterable[_Trip]) -> Iterable[_Trip]:
        """
        Add data to the feed trips from data already in the database; i.e., from
        previous feed updates.
        """
        trips = list(trips)
        trip_id_to_db_trip = self._build_trip_id_to_db_trip_map(
            trip.id for trip in trips
        )
        trip_pk_to_db_stop_time_data_list = tripqueries.get_trip_pk_to_stop_time_data_list(
            self.feed_update.feed.pk
        )
        for trip in trips:
            db_trip = trip_id_to_db_trip.get(trip.id, None)
            if db_trip is None:
                index = 1
                for stop_time in trip.stop_times:
                    # If the stop sequence is not set, or is less than a previously
                    # assigned stop sequence and hence malformed, then we update it.
                    if (
                        stop_time.stop_sequence is None
                        or stop_time.stop_sequence < index
                    ):
                        stop_time.stop_sequence = index
                    index = stop_time.stop_sequence + 1
                continue
            trip.pk = db_trip.pk
            db_stop_time_data = trip_pk_to_db_stop_time_data_list.get(db_trip.pk, [])
            past_stop_times_iter = self._build_past_stop_times(
                trip, db_trip, db_stop_time_data
            )
            self._add_future_stop_time_data_to_trip(trip, db_stop_time_data)
            trip.stop_times = list(past_stop_times_iter) + trip.stop_times

        self._calculate_stop_time_pks_to_delete(
            trips, trip_pk_to_db_stop_time_data_list
        )
        self._calculate_route_pk_to_previous_service_map_hash(
            trip_id_to_db_trip.values(), trip_pk_to_db_stop_time_data_list
        )
        return trips

    def _build_trip_id_to_db_trip_map(self, feed_trip_ids):
        trip_id_to_db_trip = {
            trip.id: trip
            for trip in tripqueries.list_all_from_feed(self.feed_update.feed.pk)
        }
        missing_trip_ids = set(
            trip_id for trip_id in feed_trip_ids if trip_id not in trip_id_to_db_trip
        )
        trip_id_to_db_trip.update(
            {
                trip.id: trip
                for trip in tripqueries.list_by_system_and_trip_ids(
                    self.feed_update.feed.system.id, missing_trip_ids
                )
            }
        )
        return trip_id_to_db_trip

    @staticmethod
    def _build_past_stop_times(
        trip, db_trip, db_stop_time_data_list: List[tripqueries.StopTimeData]
    ) -> Iterable[_TripStopTime]:
        """
        Build stop times that have already passed and are not in the feed.
        """
        if db_trip is None:
            return
        # TODO: remove this condition.
        if len(trip.stop_times) == 0:
            return
        first_future_stop_sequence = trip.stop_times[0].stop_sequence
        # Used to ensure that duplicate stops are not put into the DB. This is a
        # safety measure until #36 is resolved.
        future_stop_pks = set(stop_time.stop_pk for stop_time in trip.stop_times)
        for stop_time_data in db_stop_time_data_list:
            if stop_time_data.stop_sequence >= first_future_stop_sequence:
                return
            if stop_time_data.stop_pk in future_stop_pks:
                return
            past_stop_time = _TripStopTime(
                pk=stop_time_data.pk,
                stop_pk=stop_time_data.stop_pk,
                stop_sequence=stop_time_data.stop_sequence,
                future=False,
                stop_id="",
                is_from_parsing=False,
            )
            yield past_stop_time

    @staticmethod
    def _add_future_stop_time_data_to_trip(trip, db_stop_time_data):
        """
        Add stop time data from the database trip.
        """
        stop_pk_to_stop_sequence = {
            stop_time_data.stop_pk: stop_time_data.stop_sequence
            for stop_time_data in db_stop_time_data
        }
        index = 1
        for stop_time in trip.stop_times:
            existing_stop_sequence = stop_pk_to_stop_sequence.get(stop_time.stop_pk)
            # If stop sequence is null or malformed.
            if stop_time.stop_sequence is None or stop_time.stop_sequence < index:
                if existing_stop_sequence is None or existing_stop_sequence < index:
                    stop_time.stop_sequence = index
                else:
                    stop_time.stop_sequence = existing_stop_sequence
            index = stop_time.stop_sequence + 1

        stop_sequence_to_pk_and_stop_pk = {
            stop_sequence: (stop_time_pk, stop_pk)
            for stop_time_pk, stop_sequence, stop_pk in db_stop_time_data
        }
        for feed_stop_time in trip.stop_times:
            stop_time_pk, __ = stop_sequence_to_pk_and_stop_pk.get(
                feed_stop_time.stop_sequence, (None, None)
            )
            if stop_time_pk is not None:
                feed_stop_time.pk = stop_time_pk

    def _calculate_stop_time_pks_to_delete(self, trips, trip_pk_to_db_stop_time_data):
        """
        Calculate the stop time pks to delete and store them in the object variable.
        """
        updated_stop_time_pks = set(
            stop_time.pk
            for trip in trips
            for stop_time in trip.stop_times
            if stop_time.pk is not None
        )
        self.stop_time_pks_to_delete = set(
            stop_time_data.pk
            for db_stop_time_data_list in trip_pk_to_db_stop_time_data.values()
            for stop_time_data in db_stop_time_data_list
            if stop_time_data.pk not in updated_stop_time_pks
        )

    def _calculate_route_pk_to_previous_service_map_hash(
        self, db_trips, trip_pk_to_db_stop_time_data_list
    ):
        """
        Calculate the previous service map information and store it in the object
        variable.
        """
        route_pk_to_trip_paths = collections.defaultdict(set)
        for db_trip in db_trips:
            db_stop_time_data_list = trip_pk_to_db_stop_time_data_list.get(
                db_trip.pk, []
            )
            if len(db_stop_time_data_list) == 0:
                continue
            if not db_trip.direction_id:
                db_stop_time_data_list = reversed(db_stop_time_data_list)
            route_pk_to_trip_paths[db_trip.route_pk].add(
                tuple(
                    stop_time_data.stop_pk for stop_time_data in db_stop_time_data_list
                )
            )
        self.route_pk_to_previous_service_map_hash = {
            route_pk: servicemapmanager.calculate_paths_hash(paths)
            for route_pk, paths in route_pk_to_trip_paths.items()
        }

    def _calculate_route_pk_to_new_service_map_hash(self, trips):
        """
        Calculate the new service map information and store it in the object
        variable.
        """
        route_pk_to_trip_paths = collections.defaultdict(set)
        for trip in trips:
            if len(trip.stop_times) == 0:
                continue
            if trip.direction_id:
                stop_times = trip.stop_times
            else:
                stop_times = reversed(trip.stop_times)
            route_pk_to_trip_paths[trip.route_pk].add(
                tuple(stop_time.stop_pk for stop_time in stop_times)
            )
        self.route_pk_to_new_service_map_hash = {
            route_pk: servicemapmanager.calculate_paths_hash(paths)
            for route_pk, paths in route_pk_to_trip_paths.items()
        }

    def _fast_merge(self, trips):
        num_added, num_updated = self._fast_mappings_merge(models.Trip, trips)
        trip_id_to_db_trip_pk = genericqueries.get_id_to_pk_map_by_feed_pk(
            models.Trip, self.feed_update.feed.pk
        )
        dbconnection.get_session().query(models.TripStopTime).filter(
            models.TripStopTime.pk.in_(self.stop_time_pks_to_delete)
        ).delete(synchronize_session=False)
        for trip in trips:
            trip_pk = trip_id_to_db_trip_pk[trip.id]
            for stop_time in trip.stop_times:
                stop_time.trip_pk = trip_pk
        self._fast_mappings_merge(
            models.TripStopTime,
            (stop_time for trip in trips for stop_time in trip.stop_times),
        )
        return num_added, num_updated

    @staticmethod
    def _fast_mappings_merge(db_model, entities):
        new_mappings = []
        updated_mappings = []
        for entity in entities:
            if entity.is_new():
                new_mappings.append(entity.to_db_mapping())
            else:
                updated_mappings.append(entity.to_db_mapping())
        session = dbconnection.get_session()
        session.bulk_insert_mappings(db_model, new_mappings)
        session.bulk_update_mappings(db_model, updated_mappings)
        session.flush()
        return len(new_mappings), len(updated_mappings)

    def post_sync(self):
        changed_route_pks = servicemapmanager.calculate_changed_route_pks_from_hashes(
            self.route_pk_to_previous_service_map_hash,
            self.route_pk_to_new_service_map_hash,
        )
        if len(changed_route_pks) == 0:
            return
        route_pk_to_route = {
            route.pk: route
            for route in routequeries.list_in_system(self.feed_update.feed.system.id)
        }
        for route_pk in changed_route_pks:
            servicemapmanager.calculate_realtime_service_map_for_route(
                route_pk_to_route[route_pk]
            )


class VehicleImporter(syncer(models.Vehicle)):
    def sync(self, parsed_vehicles: typing.Iterable[parse.Vehicle]):
        parsed_vehicles = list(parsed_vehicles)
        stop_id_to_pk = self._get_stop_id_to_pk_map(
            self.feed_update.feed.system, parsed_vehicles
        )
        trip_id_to_trip = self._get_trip_id_trip_map(
            self.feed_update.feed.system, parsed_vehicles
        )

        vehicle_id_to_trip = {}
        vehicles = []
        trip_pk_stop_pk_stop_sequence_tuples = []
        for parsed_vehicle in parsed_vehicles:
            vehicle = models.Vehicle.from_parsed_vehicle(parsed_vehicle)
            vehicle.current_stop_pk = stop_id_to_pk.get(parsed_vehicle.current_stop_id)
            vehicle.system_pk = self.feed_update.feed.system_pk
            vehicles.append(vehicle)

            trip = trip_id_to_trip.get(parsed_vehicle.trip_id)
            if trip is None:
                continue
            vehicle_id_to_trip[parsed_vehicle.id] = trip
            trip_pk_stop_pk_stop_sequence_tuples.append(
                (trip.pk, vehicle.current_stop_pk, vehicle.current_stop_sequence)
            )

        trip_pk_to_stop_time_data = tripqueries.get_trip_pk_to_stop_time_data(
            trip_pk_stop_pk_stop_sequence_tuples
        )

        persisted_vehicles, num_added, num_updated = self._merge_entities(vehicles)

        for persisted_vehicle in persisted_vehicles:
            trip = vehicle_id_to_trip.get(persisted_vehicle.id)
            if trip is None:
                continue
            trip.vehicle = persisted_vehicle
            stop_time_data = trip_pk_to_stop_time_data.get(trip.pk)
            if stop_time_data is not None:
                persisted_vehicle.current_stop_pk = stop_time_data.stop_pk
                persisted_vehicle.current_stop_sequence = stop_time_data.stop_sequence

        return num_added, num_updated

    @staticmethod
    def _get_stop_id_to_pk_map(system, parsed_vehicles):
        return stopqueries.get_id_to_pk_map_in_system(
            system.pk,
            (
                vehicle.current_stop_id
                for vehicle in parsed_vehicles
                if vehicle.current_stop_id is not None
            ),
        )

    @staticmethod
    def _get_trip_id_trip_map(system, parsed_vehicles):
        return {
            trip.id: trip
            for trip in tripqueries.list_by_system_and_trip_ids(
                system.id,
                (
                    vehicle.trip_id
                    for vehicle in parsed_vehicles
                    if vehicle.trip_id is not None
                ),
            )
        }


@dataclasses.dataclass
class _AlertLinkingHelper:
    alert_to_ids_func: typing.Callable[[parse.Alert], typing.List[str]]
    list_entities_func: typing.Callable[[str, typing.List[str]], list]
    alert_field_name: str


_alert_linking_helpers = [
    _AlertLinkingHelper(
        lambda alert: alert.route_ids, routequeries.list_in_system, "routes"
    ),
    _AlertLinkingHelper(
        lambda alert: alert.stop_ids, stopqueries.list_all_in_system, "stops"
    ),
    _AlertLinkingHelper(
        lambda alert: alert.agency_ids,
        systemqueries.list_agencies_in_system,
        "agencies",
    ),
    _AlertLinkingHelper(
        lambda alert: alert.trip_ids, tripqueries.list_by_system_and_trip_ids, "trips"
    ),
]


class AlertSyncer(syncer(models.Alert)):
    def sync(self, parsed_alerts):
        alert_id_to_parsed_alert = {alert.id: alert for alert in parsed_alerts}
        persisted_alerts, num_added, num_updated = self._merge_entities(
            list(map(models.Alert.from_parsed_alert, parsed_alerts))
        )
        for alert in persisted_alerts:
            alert.system_pk = self.feed_update.feed.system.pk
        for linking_helper in _alert_linking_helpers:
            all_ids = []
            for parsed_alert in parsed_alerts:
                all_ids.extend(linking_helper.alert_to_ids_func(parsed_alert))
            entity_id_to_entity = {
                entity.id: entity
                for entity in linking_helper.list_entities_func(
                    self.feed_update.feed.system.id, all_ids
                )
            }
            for alert in persisted_alerts:
                setattr(
                    alert,
                    linking_helper.alert_field_name,
                    [
                        entity_id_to_entity[entity_id]
                        for entity_id in linking_helper.alert_to_ids_func(
                            alert_id_to_parsed_alert[alert.id]
                        )
                        if entity_id in entity_id_to_entity
                    ],
                )
        return num_added, num_updated
