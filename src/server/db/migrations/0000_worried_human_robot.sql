CREATE TABLE IF NOT EXISTS "lena_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lena_photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lena_photos_to_categories" (
	"photo_id" uuid,
	"category_id" uuid,
	CONSTRAINT "lena_photos_to_categories_photo_id_category_id_pk" PRIMARY KEY("photo_id","category_id")
);
