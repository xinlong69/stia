import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';
import { trip } from './trip';

// ==========================================
// TRANSPORTATION TABLE
// ==========================================
export const transportation = pgTable('transportation', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(),
  provider: varchar('provider', { length: 255 }),
  referenceNumber: varchar('reference_number', { length: 100 }),
  departureLocation: varchar('departure_location', { length: 255 }),
  arrivalLocation: varchar('arrival_location', { length: 255 }),
  // Handling timestamptz -> { withTimezone: true }
  departureTime: timestamp('departure_time', { withTimezone: true, mode: 'date' }),
  arrivalTime: timestamp('arrival_time', { withTimezone: true, mode: 'date' }),
  departureTimezone: varchar('departure_timezone', { length: 50 }),
  arrivalTimezone: varchar('arrival_timezone', { length: 50 }),
  details: text('details'),
  createdAt: timestamp('created_at', { mode: 'date' }).default(sql`now()`).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).default(sql`now()`).notNull(),
});

// ==========================================
// FLIGHT INFORMATION TABLE
// ==========================================
export const flightInformation = pgTable('flight_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  flightNumber: varchar('flight_number', { length: 20 }),
  airlineCode: varchar('airline_code', { length: 10 }),
  terminalDeparture: varchar('terminal_departure', { length: 10 }),
  terminalArrival: varchar('terminal_arrival', { length: 10 }),
  gate: varchar('gate', { length: 20 }),
  seatNumber: varchar('seat_number', { length: 20 }),
  aircraftType: varchar('aircraft_type', { length: 100 }),
});

// ==========================================
// RAIL INFORMATION TABLE
// ==========================================
export const railInformation = pgTable('rail_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  travelClass: varchar('travel_class', { length: 50 }),
  railNumber: varchar('rail_number', { length: 50 }),
  coachNumber: varchar('coach_number', { length: 20 }),
  seatNumber: varchar('seat_number', { length: 20 }),
  platform: varchar('platform', { length: 20 }),
  railLine: varchar('rail_line', { length: 100 }),
  details: varchar('details', { length: 255 }),
});

// ==========================================
// FERRY INFORMATION TABLE
// ==========================================
export const ferryInformation = pgTable('ferry_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  ferryName: varchar('ferry_name', { length: 255 }),
  vesselNumber: varchar('vessel_number', { length: 50 }),
  departurePort: varchar('departure_port', { length: 255 }),
  arrivalPort: varchar('arrival_port', { length: 255 }),
  departureTime: timestamp('departure_time', { withTimezone: true, mode: 'date' }),
  arrivalTime: timestamp('arrival_time', { withTimezone: true, mode: 'date' }),
  operator: varchar('operator', { length: 255 }),
  cabinNumber: varchar('cabin_number', { length: 50 }),
  seatNumber: varchar('seat_number', { length: 20 }),
  terminal: varchar('terminal', { length: 100 }),
  hasVehicleReservation: boolean('has_vehicle_reservation'),
  details: varchar('details', { length: 255 }),
});

// ==========================================
// CAR RENTAL INFORMATION TABLE
// ==========================================
export const carRentalInformation = pgTable('car_rental_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  rentalCompany: varchar('rental_company', { length: 255 }),
  carBrand: varchar('car_brand', { length: 255 }),
  carModel: varchar('car_model', { length: 255 }),
  licensePlate: varchar('license_plate', { length: 50 }),
  pickupInstructions: text('pickup_instructions'),
  dropoffInstructions: text('dropoff_instructions'),
  details: varchar('details', { length: 255 }),
});

// ==========================================
// MOTORCYCLE RENTAL INFORMATION TABLE
// ==========================================
export const motorcycleRentalInformation = pgTable('motorcycle_rental_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  rentalCompany: varchar('rental_company', { length: 255 }),
  motorcycleBrand: varchar('motorcycle_brand', { length: 255 }),
  motorcycleModel: varchar('motorcycle_model', { length: 255 }),
  licensePlate: varchar('license_plate', { length: 50 }),
  pickupInstructions: text('pickup_instructions'),
  dropoffInstructions: text('dropoff_instructions'),
  details: varchar('details', { length: 255 }),
});

// ==========================================
// BUS RENTAL INFORMATION TABLE
// ==========================================
export const busRentalInformation = pgTable('bus_rental_information', {
  id: serial('id').primaryKey(),
  transportationId: integer('transportation_id')
    .notNull()
    .unique()
    .references(() => transportation.id, { onDelete: 'cascade' }),
  rentalCompany: varchar('rental_company', { length: 255 }),
  busBrand: varchar('bus_brand', { length: 255 }),
  busModel: varchar('bus_model', { length: 255 }),
  busNumber: varchar('bus_number', { length: 50 }),
  operator: varchar('operator', { length: 255 }),
  seatNumber: varchar('seat_number', { length: 20 }),
  stopNumber: varchar('stop_number', { length: 50 }),
  details: varchar('details', { length: 255 }),
});