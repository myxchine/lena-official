"use client";

import PhotoCards from "@/components/PhotoCards";
import { useState } from "react";
import collections from "@/data/collections.json";
import Dropdown from "@/components/Dropwdown";

export default function Home() {
  const [collection, setCollection] = useState("Beauty");

  return (
    <main className="">
      <section className="">
        <div className="w-full flex items-center justify-between space-x-2 p-2 px-4">
          {["Beauty", "Swimsuit", "Editorial", "Shows"].map((category) => (
            <button
              key={category}
              onClick={() => setCollection(category)}
              className={` p-2 px-4 text-sm w-full ${
                collection === category
                  ? "border-b border-black"
                  : "border-b border-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <PhotoCards data={collections[collection]} />
      </section>
    </main>
  );
}
