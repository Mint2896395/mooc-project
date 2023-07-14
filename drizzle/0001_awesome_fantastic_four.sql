CREATE TABLE IF NOT EXISTS "newses" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" serial NOT NULL,
	"source_name" varchar(255),
	"author" varchar(255),
	"title" varchar(255),
	"description" text,
	"url" varchar(255),
	"url_to_image" varchar(255),
	"published_at" timestamp,
	"content" text,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "courses" DROP CONSTRAINT "courses_profile_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "courses" ADD CONSTRAINT "courses_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "courses" DROP COLUMN IF EXISTS "profile_id";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "newses" ADD CONSTRAINT "newses_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
