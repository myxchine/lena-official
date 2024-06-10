"use client";

import PhotoCards from "@/components/PhotoCards";
import { useState } from "react";
import collections from "@/data/collections.json";
import Dropdown from "@/components/Dropwdown";

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
      </div>

      <section className="px-2 mb-4">
        <Dropdown title="Measurements">
          <ul>
            {[
              { label: "Height", value: "5'7" },
              { label: "Bust", value: "83" },
              { label: "Waist", value: "60" },
              { label: "Hips", value: "85" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex justify-between border-b py-1"
              >
                <span>{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </Dropdown>

        <Dropdown title="Brands worked with">
          <ul className="space-y-2">
            <li>Toni&Guy</li>
            <li>Alfaparf Milano</li>
            <li>Delulu</li>
            <li>Miss Out of Office</li>
            <li>Art Deco cosmetics</li>
            <li>Pierre Rene</li>
            <li>Anabelle Minerals</li>
            <li>Olivea Green</li>
            <li>Honey Fashion Accessories</li>
            <li>Hemway</li>
          </ul>
        </Dropdown>
        <Dropdown title="Magazines featured">
          <ul className="space-y-2">
            <li>Downtown LA/NY/Miama</li>
          </ul>
        </Dropdown>
      </section>

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
