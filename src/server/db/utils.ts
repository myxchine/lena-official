"use server";

import { db } from ".";
import { photos, categories, photosToCategories } from "./schema";
import { eq, and } from "drizzle-orm";

export const verifyPassword = async (password: string) => {
  const result = (password == process.env.ADMIN_PASSWORD) as boolean;
  return result;
};

export async function addPhotoToCategory(photoId: string, categoryId: string) {
  await db.insert(photosToCategories).values({
    photoId,
    categoryId,
  });
}

export async function removePhotoFromCategory(
  photoId: string,
  categoryId: string
) {
  await db
    .delete(photosToCategories)
    .where(
      and(
        eq(photosToCategories.photoId, photoId),
        eq(photosToCategories.categoryId, categoryId)
      )
    );
}
