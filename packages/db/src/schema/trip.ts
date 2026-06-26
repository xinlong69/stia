import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';

// ==========================================
// TRIP TABLE
// ==========================================
export const trip = pgTable('trip', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  ownerId: integer('owner_id').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  destination: varchar('destination', { length: 255 }),
  startDate: timestamp('start_date', { mode: 'date' }).notNull(),
  endDate: timestamp('end_date', { mode: 'date' }).notNull(),
  timezone: varchar('timezone', { length: 50 }).default('UTC'),
  tripUrl: varchar('trip_url', { length: 255 }),
  status: varchar('status', { length: 20 }).default('draft'),
  isPublic: boolean('is_public').default(false),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
});

// ==========================================
// TRIP MEMBER TABLE
// ==========================================
export const tripMember = pgTable('trip_member', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull(),
  canEditItinerary: boolean('can_edit_itinerary').default(false),
  canManageExpenses: boolean('can_manage_expenses').default(false),
  canInviteOthers: boolean('can_invite_others').default(false),
  canManageTransportation: boolean('can_manage_transportation').default(false),
  canManageAccommodations: boolean('can_manage_accommodations').default(false),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
}, (table) => [
  unique('unique_trip_user').on(table.tripId, table.userId)
]);

// ==========================================
// TRIP INVITATION TABLE
// ==========================================
export const tripInvitation = pgTable('trip_invitation', {
  id: serial('id').primaryKey(),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  email: varchar('email', { length: 255 }).notNull(),
  token: varchar('token', { length: 255 }).notNull().unique(),
  role: varchar('role', { length: 50 }).default('member'),
  invitedByUserId: integer('invited_by_user_id').notNull(),
  expiresAt: timestamp('expires_at', { mode: 'date' }).notNull(),
  acceptedAt: timestamp('accepted_at', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
});

// ==========================================
// TRIP LABEL TABLE
// ==========================================
export const tripLabel = pgTable('trip_label', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  name: varchar('name', { length: 50 }).notNull(),
  emoji: varchar('emoji', { length: 10 }),
  color: varchar('color', { length: 20 }),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
}, (table) => [
  unique('unique_user_label_name').on(table.userId, table.name)
]);