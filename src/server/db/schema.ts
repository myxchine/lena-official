import { uuid, pgTableCreator, text, primaryKey } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

// Helper function to create table names with a prefix
export const createTable = pgTableCreator((name) => `lena_${name}`);

// Photos table definition
export const photos = createTable("photos", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
});

// Categories table definition
export const categories = createTable("categories", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
});

export const photosToCategories = createTable(
  "photos_to_categories",
  {
    photoId: uuid("photo_id"),
    categoryId: uuid("category_id"),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.photoId, table.categoryId] }),
    };
  }
);

export const photosToCategoriesRelations = relations(
  photosToCategories,
  ({ one }) => ({
    photo: one(photos, {
      fields: [photosToCategories.photoId],
      references: [photos.id],
    }),
    category: one(categories, {
      fields: [photosToCategories.categoryId],
      references: [categories.id],
    }),
  })
);

export const photosRelations = relations(photos, ({ many }) => ({
  categories: many(photosToCategories, { relationName: "photoCategories" }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  photos: many(photosToCategories, { relationName: "categoryPhotos" }),
}));
