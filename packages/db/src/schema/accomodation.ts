import { sql } from 'drizzle-orm';
import {
  date,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';
import { trip } from './trip'; // Adjust path as necessary

// ==========================================
// ACCOMMODATIONS TABLE
// ==========================================
export const accommodation = pgTable('accommodation', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }),
  address: text('address'),
  accommodationUrl: varchar('accommodation_url', { length: 255 }),
  
  // Storing pure dates without times (YYYY-MM-DD)
  startDate: date('start_date', { mode: 'string' }),
  endDate: date('end_date', { mode: 'string' }),
  
  // Timestamps with time zone mapping
  checkInTime: timestamp('check_in_time', { withTimezone: true, mode: 'date' }),
  checkOutTime: timestamp('check_out_time', { withTimezone: true, mode: 'date' }),
  checkInTimezone: varchar('check_in_timezone', { length: 50 }),
  checkOutTimezone: varchar('check_out_timezone', { length: 50 }),
  confirmationNumber: varchar('confirmation_number', { length: 100 }),
  
  // Mapping decimal(9,6) for precise coordinates
  latitude: numeric('latitude', { precision: 9, scale: 6 }),
  longitude: numeric('longitude', { precision: 9, scale: 6 }),
  
  details: text('details'),
  
  // Mapping numeric(12, 2) for currency/costs
  cost: numeric('cost', { precision: 12, scale: 2 }),
  currency: varchar('currency', { length: 10 }).default('SGD').notNull(),
  
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
});