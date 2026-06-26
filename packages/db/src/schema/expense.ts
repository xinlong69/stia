import { sql } from 'drizzle-orm';
import {
  date,
  integer,
  numeric,
  pgTable,
  serial,
  timestamp,
  unique,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';
import { trip } from './trip'; // Adjust path as necessary

// ==========================================
// EXPENSE TABLE
// ==========================================
export const expense = pgTable('expense', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid')
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  tripId: integer('trip_id')
    .notNull()
    .references(() => trip.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  category: varchar('category', { length: 100 }),
  expenseDate: date('expense_date', { mode: 'string' }),
  expenseUrl: varchar('expense_url', { length: 255 }),
  amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 10 }).default('SGD').notNull(),
  // Handled default numeric value as string matching Kysely's migration layout
  exchangeRate: numeric('exchange_rate', { precision: 12, scale: 6 }).default('1'),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .default(sql`now()`)
    .notNull(),
});

// ==========================================
// EXPENSE PAYER TABLE
// ==========================================
export const expensePayer = pgTable('expense_payer', {
  id: serial('id').primaryKey(),
  expenseId: integer('expense_id')
    .notNull()
    .references(() => expense.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull(),
  amountPaid: numeric('amount_paid', { precision: 12, scale: 2 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).default(sql`now()`),
}, (table) => [
  unique('unique_expense_payer').on(table.expenseId, table.userId)
]);

// ==========================================
// EXPENSE SPLIT TABLE
// ==========================================
export const expenseSplit = pgTable('expense_split', {
  id: serial('id').primaryKey(),
  expenseId: integer('expense_id')
    .notNull()
    .references(() => expense.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull(),
  amountOwed: numeric('amount_owed', { precision: 12, scale: 2 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).default(sql`now()`),
});