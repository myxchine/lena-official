"use client";

import PhotoCards from "@/components/PhotoCards";
import { useState } from "react";
import collections from "@/data/collections.json";

export default function Home() {
  const [collection, setCollection] = useState("Swimsuit");

  return (
    <main className="">
      <div className="p-8">
        <header className="w-full flex flex-col items-center justify-center space-y-2">
          <h1 className="text-3xl font-bold text-center">Lena Pietrzak</h1>
          <p className="text-center text-sm text-black/80">
            Portugal - London - Paris
          </p>
        </header>

        <section className="hidden">
          <div className="flex flex-row items-center justify-between space-x-2">
            <p>Height 5'7</p>
            <p>83-60-85</p>
          </div>
        </section>
      </div>

      <section>
        <div className="w-full flex items-center justify-between space-x-2 p-2">
          {["Swimsuit", "Beauty", "Editorial", "Shows"].map((category) => (
            <button
              key={category}
              onClick={() => setCollection(category)}
              className={`border rounded p-2 px-4 text-sm w-full ${
                collection === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
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
