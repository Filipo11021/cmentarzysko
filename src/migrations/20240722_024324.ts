import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_links_type" AS ENUM('internal', 'external');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"alt" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" varchar NOT NULL,
	"type" "enum_links_type" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "community_prizes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"heading" varchar NOT NULL,
	"title" varchar NOT NULL,
	"subtitle" varchar NOT NULL,
	"description" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "prizes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"heading" varchar NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"image_id" uuid NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" uuid NOT NULL,
	"path" varchar NOT NULL,
	"users_id" uuid
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "homepage_hero_buttons" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"link_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "homepage_about_league_buttons" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"link_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "homepage_questions_buttons" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"link_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "homepage_questions_items" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"question" varchar NOT NULL,
	"answer" jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS "homepage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hero_title" varchar NOT NULL,
	"hero_description" varchar NOT NULL,
	"hero_timer_title" varchar NOT NULL,
	"about_league_heading" varchar NOT NULL,
	"about_league_title" varchar NOT NULL,
	"about_league_description" varchar NOT NULL,
	"questions_heading" varchar NOT NULL,
	"questions_title" varchar NOT NULL,
	"questions_description" varchar NOT NULL,
	"prizes_heading" varchar NOT NULL,
	"prizes_title" varchar NOT NULL,
	"prizes_description" varchar NOT NULL,
	"community_prizes_title" varchar NOT NULL,
	"community_prizes_description" varchar NOT NULL,
	"meta_title" varchar,
	"meta_description" varchar,
	"meta_image_id" uuid,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "homepage_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" uuid NOT NULL,
	"path" varchar NOT NULL,
	"prizes_id" uuid,
	"community_prizes_id" uuid
);

CREATE TABLE IF NOT EXISTS "header_navigation" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"link_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "header" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"call_to_action_label" varchar NOT NULL,
	"call_to_action_link_id" uuid NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "footer_social_media" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"link_id" uuid NOT NULL,
	"icon_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"contact_title" varchar NOT NULL,
	"contact_email" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "config" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"google_analytics_id" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "links_created_at_idx" ON "links" ("created_at");
CREATE INDEX IF NOT EXISTS "community_prizes_created_at_idx" ON "community_prizes" ("created_at");
CREATE INDEX IF NOT EXISTS "prizes_created_at_idx" ON "prizes" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "homepage_hero_buttons_order_idx" ON "homepage_hero_buttons" ("_order");
CREATE INDEX IF NOT EXISTS "homepage_hero_buttons_parent_id_idx" ON "homepage_hero_buttons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "homepage_about_league_buttons_order_idx" ON "homepage_about_league_buttons" ("_order");
CREATE INDEX IF NOT EXISTS "homepage_about_league_buttons_parent_id_idx" ON "homepage_about_league_buttons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "homepage_questions_buttons_order_idx" ON "homepage_questions_buttons" ("_order");
CREATE INDEX IF NOT EXISTS "homepage_questions_buttons_parent_id_idx" ON "homepage_questions_buttons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "homepage_questions_items_order_idx" ON "homepage_questions_items" ("_order");
CREATE INDEX IF NOT EXISTS "homepage_questions_items_parent_id_idx" ON "homepage_questions_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "homepage_rels_order_idx" ON "homepage_rels" ("order");
CREATE INDEX IF NOT EXISTS "homepage_rels_parent_idx" ON "homepage_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "homepage_rels_path_idx" ON "homepage_rels" ("path");
CREATE INDEX IF NOT EXISTS "header_navigation_order_idx" ON "header_navigation" ("_order");
CREATE INDEX IF NOT EXISTS "header_navigation_parent_id_idx" ON "header_navigation" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_social_media_order_idx" ON "footer_social_media" ("_order");
CREATE INDEX IF NOT EXISTS "footer_social_media_parent_id_idx" ON "footer_social_media" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "prizes" ADD CONSTRAINT "prizes_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_hero_buttons" ADD CONSTRAINT "homepage_hero_buttons_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_hero_buttons" ADD CONSTRAINT "homepage_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_about_league_buttons" ADD CONSTRAINT "homepage_about_league_buttons_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_about_league_buttons" ADD CONSTRAINT "homepage_about_league_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_questions_buttons" ADD CONSTRAINT "homepage_questions_buttons_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_questions_buttons" ADD CONSTRAINT "homepage_questions_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_questions_items" ADD CONSTRAINT "homepage_questions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage" ADD CONSTRAINT "homepage_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_prizes_fk" FOREIGN KEY ("prizes_id") REFERENCES "prizes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_community_prizes_fk" FOREIGN KEY ("community_prizes_id") REFERENCES "community_prizes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_navigation" ADD CONSTRAINT "header_navigation_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_navigation" ADD CONSTRAINT "header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header" ADD CONSTRAINT "header_call_to_action_link_id_links_id_fk" FOREIGN KEY ("call_to_action_link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_social_media" ADD CONSTRAINT "footer_social_media_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_social_media" ADD CONSTRAINT "footer_social_media_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_social_media" ADD CONSTRAINT "footer_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "users";
DROP TABLE "media";
DROP TABLE "links";
DROP TABLE "community_prizes";
DROP TABLE "prizes";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "homepage_hero_buttons";
DROP TABLE "homepage_about_league_buttons";
DROP TABLE "homepage_questions_buttons";
DROP TABLE "homepage_questions_items";
DROP TABLE "homepage";
DROP TABLE "homepage_rels";
DROP TABLE "header_navigation";
DROP TABLE "header";
DROP TABLE "footer_social_media";
DROP TABLE "footer";
DROP TABLE "config";`)
};
