"use client";

import { Photo, Category } from "@/server/types";
import Image from "next/image";
import { useState } from "react";
import { addPhotoToCategory } from "@/server/db/utils";

export default function Home({
  photos,
  categories,
}: {
  photos: Photo[];
  categories: Category[];
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setShowPopup(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (selectedPhoto) {
      addPhotoToCategory(selectedPhoto.id, categoryId);
      setShowPopup(false);
      setSelectedPhoto(null);
    }
  };

  return (
    <div className="flex flex-col p-4 w-full space-y-4">
      <h1 className="text-xl font-bold">Photos</h1>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos
          .filter((photo) => photo.name !== "NULL")
          .map((photo) => (
            <li key={photo.id} className="">
              <Image
                src={`/images/all/${photo.name}`}
                width={200}
                height={200}
                loading="lazy"
                alt="Photo"
                className="aspect-square w-full object-cover rounded object-cover"
              />
              <button
                onClick={() => handleClick(photo)}
                className="w-full border p-2 rounded-md mt-2"
              >
                Add to Category
              </button>
            </li>
          ))}
      </ul>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">Select Category</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full text-left border p-2 rounded-md"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full mt-4 border p-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
