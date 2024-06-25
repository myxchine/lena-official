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

async function getCategoryIdByName(categoryName: string): Promise<string> {
  try {
    const result = await db.query.categories.findFirst({
      where: eq(categories.name, categoryName),
    });

    return result?.id || "";
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Function to get photo ID by name
async function getPhotoIdByName(photoName: string): Promise<string> {
  try {
    const result = await db.query.photos.findFirst({
      where: eq(photos.name, photoName),
    });

    return result?.id || "";
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Function to remove photo from category
export async function removePhotoFromCategoryByName(
  categoryName: string,
  photoName: string
) {
  console.log(categoryName, photoName);
  const categoryId = await getCategoryIdByName(categoryName);
  const photoId = await getPhotoIdByName(photoName);
  console.log(categoryId, photoId);

  if (categoryId && photoId) {
    await db
      .delete(photosToCategories)
      .where(
        and(
          eq(photosToCategories.categoryId, categoryId),
          eq(photosToCategories.photoId, photoId)
        )
      );

    console.log("Photo removed from category");
  } else {
    console.log("Category or Photo not found");
  }
}
