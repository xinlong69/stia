CREATE TABLE "accommodation" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"location" varchar(255),
	"address" text,
	"accommodation_url" varchar(255),
	"start_date" date,
	"end_date" date,
	"check_in_time" timestamp with time zone,
	"check_out_time" timestamp with time zone,
	"check_in_timezone" varchar(50),
	"check_out_timezone" varchar(50),
	"confirmation_number" varchar(100),
	"latitude" numeric(9, 6),
	"longitude" numeric(9, 6),
	"details" text,
	"cost" numeric(12, 2),
	"currency" varchar(10) DEFAULT 'SGD' NOT NULL,
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "accommodation_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "checklist_category" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer NOT NULL,
	"name" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "checklist_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"category_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"is_done" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "checklist_item_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "expense" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"category" varchar(100),
	"expense_date" date,
	"expense_url" varchar(255),
	"amount" numeric(12, 2) NOT NULL,
	"currency" varchar(10) DEFAULT 'SGD' NOT NULL,
	"exchange_rate" numeric(12, 6) DEFAULT '1',
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "expense_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "expense_payer" (
	"id" serial PRIMARY KEY NOT NULL,
	"expense_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"amount_paid" numeric(12, 2) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "unique_expense_payer" UNIQUE("expense_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "expense_split" (
	"id" serial PRIMARY KEY NOT NULL,
	"expense_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"amount_owed" numeric(12, 2) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "itinerary" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" integer NOT NULL,
	"day_number" integer NOT NULL,
	"sequence" integer DEFAULT 0 NOT NULL,
	"title" varchar(255),
	"location" varchar(255),
	"address" text,
	"itinerary_url" varchar(255),
	"start_time" timestamp with time zone,
	"end_time" timestamp with time zone,
	"start_timezone" varchar(50),
	"end_timezone" varchar(50),
	"latitude" numeric(9, 6),
	"longitude" numeric(9, 6),
	"description" text,
	"links" text,
	"cost" numeric(12, 2),
	"currency" varchar(10) DEFAULT 'SGD' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "itinerary_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "post" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"content" text NOT NULL,
	"author_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "bus_rental_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"rental_company" varchar(255),
	"bus_brand" varchar(255),
	"bus_model" varchar(255),
	"bus_number" varchar(50),
	"operator" varchar(255),
	"seat_number" varchar(20),
	"stop_number" varchar(50),
	"details" varchar(255),
	CONSTRAINT "bus_rental_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "car_rental_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"rental_company" varchar(255),
	"car_brand" varchar(255),
	"car_model" varchar(255),
	"license_plate" varchar(50),
	"pickup_instructions" text,
	"dropoff_instructions" text,
	"details" varchar(255),
	CONSTRAINT "car_rental_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "ferry_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"ferry_name" varchar(255),
	"vessel_number" varchar(50),
	"departure_port" varchar(255),
	"arrival_port" varchar(255),
	"departure_time" timestamp with time zone,
	"arrival_time" timestamp with time zone,
	"operator" varchar(255),
	"cabin_number" varchar(50),
	"seat_number" varchar(20),
	"terminal" varchar(100),
	"has_vehicle_reservation" boolean,
	"details" varchar(255),
	CONSTRAINT "ferry_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "flight_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"flight_number" varchar(20),
	"airline_code" varchar(10),
	"terminal_departure" varchar(10),
	"terminal_arrival" varchar(10),
	"gate" varchar(20),
	"seat_number" varchar(20),
	"aircraft_type" varchar(100),
	CONSTRAINT "flight_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "motorcycle_rental_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"rental_company" varchar(255),
	"motorcycle_brand" varchar(255),
	"motorcycle_model" varchar(255),
	"license_plate" varchar(50),
	"pickup_instructions" text,
	"dropoff_instructions" text,
	"details" varchar(255),
	CONSTRAINT "motorcycle_rental_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "rail_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"transportation_id" integer NOT NULL,
	"travel_class" varchar(50),
	"rail_number" varchar(50),
	"coach_number" varchar(20),
	"seat_number" varchar(20),
	"platform" varchar(20),
	"rail_line" varchar(100),
	"details" varchar(255),
	CONSTRAINT "rail_information_transportation_id_unique" UNIQUE("transportation_id")
);
--> statement-breakpoint
CREATE TABLE "transportation" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" integer NOT NULL,
	"type" varchar(50) NOT NULL,
	"provider" varchar(255),
	"reference_number" varchar(100),
	"departure_location" varchar(255),
	"arrival_location" varchar(255),
	"departure_time" timestamp with time zone,
	"arrival_time" timestamp with time zone,
	"departure_timezone" varchar(50),
	"arrival_timezone" varchar(50),
	"details" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transportation_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "trip" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"destination" varchar(255),
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"timezone" varchar(50) DEFAULT 'UTC',
	"trip_url" varchar(255),
	"status" varchar(20) DEFAULT 'draft',
	"is_public" boolean DEFAULT false,
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "trip_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "trip_invitation" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'member',
	"invited_by_user_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	"accepted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "trip_invitation_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "trip_label" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"name" varchar(50) NOT NULL,
	"emoji" varchar(10),
	"color" varchar(20),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "unique_user_label_name" UNIQUE("user_id","name")
);
--> statement-breakpoint
CREATE TABLE "trip_member" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"can_edit_itinerary" boolean DEFAULT false,
	"can_manage_expenses" boolean DEFAULT false,
	"can_invite_others" boolean DEFAULT false,
	"can_manage_transportation" boolean DEFAULT false,
	"can_manage_accommodations" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "trip_member_uuid_unique" UNIQUE("uuid"),
	CONSTRAINT "unique_trip_user" UNIQUE("trip_id","user_id")
);
--> statement-breakpoint
ALTER TABLE "accommodation" ADD CONSTRAINT "accommodation_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "checklist_category" ADD CONSTRAINT "checklist_category_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "checklist_item" ADD CONSTRAINT "checklist_item_category_id_checklist_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."checklist_category"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expense" ADD CONSTRAINT "expense_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expense_payer" ADD CONSTRAINT "expense_payer_expense_id_expense_id_fk" FOREIGN KEY ("expense_id") REFERENCES "public"."expense"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expense_split" ADD CONSTRAINT "expense_split_expense_id_expense_id_fk" FOREIGN KEY ("expense_id") REFERENCES "public"."expense"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "itinerary" ADD CONSTRAINT "itinerary_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bus_rental_information" ADD CONSTRAINT "bus_rental_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "car_rental_information" ADD CONSTRAINT "car_rental_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ferry_information" ADD CONSTRAINT "ferry_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flight_information" ADD CONSTRAINT "flight_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "motorcycle_rental_information" ADD CONSTRAINT "motorcycle_rental_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rail_information" ADD CONSTRAINT "rail_information_transportation_id_transportation_id_fk" FOREIGN KEY ("transportation_id") REFERENCES "public"."transportation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transportation" ADD CONSTRAINT "transportation_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trip_invitation" ADD CONSTRAINT "trip_invitation_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trip_member" ADD CONSTRAINT "trip_member_trip_id_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_userId_idx" ON "account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_userId_idx" ON "session" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" USING btree ("identifier");--> statement-breakpoint
CREATE INDEX "idx_itinerary_trip_day_seq" ON "itinerary" USING btree ("trip_id","day_number","sequence");