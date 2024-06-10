"use client";

import { useState } from "react";

import Dropdown from "@/components/Dropwdown";

const About = () => {
  const [collection, setCollection] = useState("Measurements");
  return (
    <main className="">
      <section className="px-2">
        <div className="w-full flex items-center justify-between space-x-2 p-2">
          {["Measurements", "Brands", "Magazines"].map((category) => (
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
    </main>
  );
};

export default About;
