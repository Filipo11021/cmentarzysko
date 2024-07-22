import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "media" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "media" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "links" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "links" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "community_prizes" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "community_prizes" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "prizes" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "prizes" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "prizes" ALTER COLUMN "image_id" SET DATA TYPE uuid;
ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "payload_preferences_rels" ALTER COLUMN "parent_id" SET DATA TYPE uuid;
ALTER TABLE "payload_preferences_rels" ALTER COLUMN "users_id" SET DATA TYPE uuid;
ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "homepage_hero_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_hero_buttons" ALTER COLUMN "link_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_about_league_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_about_league_buttons" ALTER COLUMN "link_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_questions_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_questions_buttons" ALTER COLUMN "link_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_questions_items" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "homepage" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "homepage" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "homepage" ALTER COLUMN "meta_image_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_rels" ALTER COLUMN "parent_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_rels" ALTER COLUMN "prizes_id" SET DATA TYPE uuid;
ALTER TABLE "homepage_rels" ALTER COLUMN "community_prizes_id" SET DATA TYPE uuid;
ALTER TABLE "header_navigation" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "header_navigation" ALTER COLUMN "link_id" SET DATA TYPE uuid;
ALTER TABLE "header" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "header" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "header" ALTER COLUMN "call_to_action_link_id" SET DATA TYPE uuid;
ALTER TABLE "footer_social_media" ALTER COLUMN "_parent_id" SET DATA TYPE uuid;
ALTER TABLE "footer_social_media" ALTER COLUMN "link_id" SET DATA TYPE uuid;
ALTER TABLE "footer_social_media" ALTER COLUMN "icon_id" SET DATA TYPE uuid;
ALTER TABLE "footer" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "footer" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "config" ALTER COLUMN "id" SET DATA TYPE uuid;
ALTER TABLE "config" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "media" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "media" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "links" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "community_prizes" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "community_prizes" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "prizes" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "prizes" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "prizes" ALTER COLUMN "image_id" SET DATA TYPE integer;
ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "payload_preferences" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "payload_preferences_rels" ALTER COLUMN "parent_id" SET DATA TYPE integer;
ALTER TABLE "payload_preferences_rels" ALTER COLUMN "users_id" SET DATA TYPE integer;
ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "payload_migrations" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "homepage_hero_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "homepage_hero_buttons" ALTER COLUMN "link_id" SET DATA TYPE integer;
ALTER TABLE "homepage_about_league_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "homepage_about_league_buttons" ALTER COLUMN "link_id" SET DATA TYPE integer;
ALTER TABLE "homepage_questions_buttons" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "homepage_questions_buttons" ALTER COLUMN "link_id" SET DATA TYPE integer;
ALTER TABLE "homepage_questions_items" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "homepage" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "homepage" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "homepage" ALTER COLUMN "meta_image_id" SET DATA TYPE integer;
ALTER TABLE "homepage_rels" ALTER COLUMN "parent_id" SET DATA TYPE integer;
ALTER TABLE "homepage_rels" ALTER COLUMN "prizes_id" SET DATA TYPE integer;
ALTER TABLE "homepage_rels" ALTER COLUMN "community_prizes_id" SET DATA TYPE integer;
ALTER TABLE "header_navigation" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "header_navigation" ALTER COLUMN "link_id" SET DATA TYPE integer;
ALTER TABLE "header" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "header" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "header" ALTER COLUMN "call_to_action_link_id" SET DATA TYPE integer;
ALTER TABLE "footer_social_media" ALTER COLUMN "_parent_id" SET DATA TYPE integer;
ALTER TABLE "footer_social_media" ALTER COLUMN "link_id" SET DATA TYPE integer;
ALTER TABLE "footer_social_media" ALTER COLUMN "icon_id" SET DATA TYPE integer;
ALTER TABLE "footer" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "footer" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "config" ALTER COLUMN "id" SET DATA TYPE serial;
ALTER TABLE "config" ALTER COLUMN "id" DROP DEFAULT;`)
};
