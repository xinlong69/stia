import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as accommodationSchema from "./schema/accomodation";
import * as authSchema from "./schema/auth";
import * as checklistSchema from "./schema/checklist";
import * as expenseSchema from "./schema/expense";
import * as itinerarySchema from "./schema/itinerary";
import * as postSchema from "./schema/post";
import * as transportationSchema from "./schema/transportation";
import * as tripSchema from "./schema/trip";

// Initialize the Neon HTTP client
const databaseUrl = process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error("Missing POSTGRES_URL");
}

const pool = new Pool({
  connectionString: databaseUrl,
});

// Initialize Drizzle with your options passed in a configuration object
export const db = drizzle(pool, {
  schema: { 
    ...accommodationSchema,
    ...authSchema,
    ...checklistSchema,
    ...expenseSchema,
    ...itinerarySchema,
    ...postSchema,
    ...transportationSchema,
    ...tripSchema,
  },
  casing: "snake_case",
});

export type Database = typeof db;