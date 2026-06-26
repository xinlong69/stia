import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';
import { trip } from './trip'; // Adjust path as necessary

// ==========================================
// CHECKLIST CATEGORIES TABLE
// ==========================================
export const checklistCategory = pgTable('checklist_category', {
  id: serial('id').primaryKey(),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 100 }).notNull(),
});

// ==========================================
// CHECKLIST ITEMS TABLE
// ==========================================
export const checklistItem = pgTable('checklist_item', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  categoryId: integer('category_id')
    .notNull()
    .references(() => checklistCategory.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  isDone: boolean('is_done').default(false).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
});