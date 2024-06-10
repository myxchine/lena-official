"use client";

import PhotoCards from "@/components/PhotoCards";
import { useState } from "react";
import collections from "@/data/collections.json";

type CollectionCategory = "Beauty" | "Swimsuit" | "Editorial" | "Shows";

type Collections = {
  [key in CollectionCategory]: string[];
};

// Ensure collections is correctly typed
const typedCollections: Collections = collections;

export default function Home() {
  // Initialize state with type safety
  const [collection, setCollection] = useState<CollectionCategory>("Beauty");

  return (
    <main className="">
      <PhotoCards data={typedCollections[collection]} />

      <div className="fixed bottom-0 bg-white w-full flex items-center justify-between space-x-2 py-4 px-4">
        {["Beauty", "Swimsuit", "Editorial", "Shows"].map((category) => (
          <button
            key={category}
            onClick={() => setCollection(category as CollectionCategory)}
            className={`p-2 px-4 text-sm w-full ${
              collection === category
                ? "border-b border-black"
                : "border-b border-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </main>
  );
}
