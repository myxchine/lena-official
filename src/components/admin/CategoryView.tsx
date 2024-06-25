"use client";

import { useState } from "react";
import Image from "next/image";
import { photosByCategory } from "@/server/types";
import { removePhotoFromCategoryByName } from "@/server/db/utils";
import { useRouter } from "next/navigation";

export default function CategoryView({
  photosByCategory: photosByCategory,
}: {
  photosByCategory: photosByCategory[];
}) {
  const router = useRouter();
  const handleClick = (photo: string, category: string) => {
    removePhotoFromCategoryByName(category, photo);
    router.refresh();
  };
  return (
    <div>
      <ul className="flex flex-col space-y-4">
        {photosByCategory.map((category) => (
          <li key={category.categoryName} className="   w-full ">
            <div className="flex flex-col text-left items-center w-full space-y-4">
              <div className="flex justify-between items-center w-full ">
                <h2 className="capitalize w-full">{category.categoryName}</h2>
              </div>

              <div className="flex flex-col items-center w-full ">
                <div className="flex items-center w-full grid grid-cols-2 gap-4">
                  {category.photoNames
                    .filter((photoName) => photoName !== "NULL") // Filter out 'NULL' photo names
                    .map((photoName) => (
                      <div>
                        <Image
                          key={photoName}
                          src={`/images/all/${photoName}`}
                          alt={photoName}
                          width={100}
                          height={100}
                          className="rounded aspect-square object-cover w-full"
                        />
                        <button
                          onClick={() =>
                            handleClick(photoName, category.categoryName)
                          }
                          className="w-full border p-2 rounded-md mt-2"
                        >
                          REMOVE
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
