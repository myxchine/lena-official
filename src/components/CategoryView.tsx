"use client";

import PhotoCards from "@/components/PhotoCards";
import { photosByCategory } from "@/server/types";
import { useState } from "react";

// Ensure collections is correctly typed

export function CategoryView({
  categories: categories,
}: {
  categories: photosByCategory;
}) {

  // Initialize state with type safety
  const [collection, setCollection] = useState<string>("beauty");
  console.log(categories.photoNames);
  return (
    <main className="">
      <PhotoCards data={categories.photoNames} />

   
    </main>
  );
}
