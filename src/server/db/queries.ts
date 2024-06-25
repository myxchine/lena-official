"use server";

import { db } from ".";
import { Photo, Category, photosByCategory } from "@/server/types";
import { count, sql, eq } from "drizzle-orm";
import { photos, categories, photosToCategories } from "./schema";

export async function getPhotos(): Promise<Photo[]> {
  console.log("Fetching patients");
  try {
    const photos = await db.query.photos.findMany();

    console.log("photos fetched!");

    return photos as Photo[];
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw new Error("Failed to fetch patients");
  }
}

export async function getCategories(): Promise<Category[]> {
  console.log("Fetching categories");
  try {
    const categories = await db.query.categories.findMany();

    console.log("Categories fetched!");

    return categories as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
}

export async function getCategory(id: string): Promise<Category> {
  const result = await db.query.categories.findFirst({
    where: (categories, { eq }) => eq(categories.id, id),
  });

  return result as Category;
}

export async function getPhotosByCategory(): Promise<photosByCategory[]> {
  const result = await db
    .select({
      categoryName: categories.name,
      photoNames: sql`array_agg(${photos.name})`.as("photoNames"),
    })
    .from(categories)
    .leftJoin(
      photosToCategories,
      sql`${categories.id} = ${photosToCategories.categoryId}`
    )
    .leftJoin(photos, sql`${photosToCategories.photoId} = ${photos.id}`)
    .groupBy(categories.name);
  return result as photosByCategory[];
}

export async function getPhotosFromCategory(
  categoryName: string
): Promise<photosByCategory[]> {
  const result = await db
    .select({
      categoryName: categories.name,
      photoNames: sql`array_agg(${photos.name})`.as("photoNames"),
    })
    .from(categories)
    .leftJoin(
      photosToCategories,
      sql`${categories.id} = ${photosToCategories.categoryId}`
    )
    .leftJoin(photos, sql`${photosToCategories.photoId} = ${photos.id}`)
    .where(eq(categories.name, categoryName))
    .groupBy(categories.name);

  return result as photosByCategory[];
}
