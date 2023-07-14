ALTER TABLE "newses" DROP CONSTRAINT "newses_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "newses" DROP COLUMN IF EXISTS "user_id";