import { sql } from 'drizzle-orm';
import {
  index,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';
import { trip } from './trip';

// ==========================================
// ITINERARY TABLE
// ==========================================
export const itinerary = pgTable('itinerary', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  dayNumber: integer('day_number').notNull(),
  sequence: integer('sequence').default(0).notNull(),
  title: varchar('title', { length: 255 }),
  location: varchar('location', { length: 255 }),
  address: text('address'),
  itineraryUrl: varchar('itinerary_url', { length: 255 }),
  
  // Timestamps with time zone configuration
  startTime: timestamp('start_time', { withTimezone: true, mode: 'date' }),
  endTime: timestamp('end_time', { withTimezone: true, mode: 'date' }),
  startTimezone: varchar('start_timezone', { length: 50 }),
  endTimezone: varchar('end_timezone', { length: 50 }),
  
  // Coordinates mapping decimal(9,6)
  latitude: numeric('latitude', { precision: 9, scale: 6 }),
  longitude: numeric('longitude', { precision: 9, scale: 6 }),
  
  description: text('description'),
  links: text('links'),
  
  // Cost/Financial numeric types
  cost: numeric('cost', { precision: 12, scale: 2 }),
  currency: varchar('currency', { length: 10 }).default('SGD').notNull(),
  
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
}, (table) => [
  // Composite index definition
  index('idx_itinerary_trip_day_seq').on(table.tripId, table.dayNumber, table.sequence)
]);