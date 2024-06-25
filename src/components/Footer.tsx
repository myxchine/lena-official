"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const categories = [
    { name: "Beauty", url: "beauty" },
    { name: "Swimsuit", url: "swim" },
    { name: "Editorial", url: "editorial" },
    { name: "Shows", url: "shows" },
  ];

  return (
    <footer className="fixed bottom-0 bg-white w-full flex items-center justify-between space-x-2 py-4 px-4">
      {categories.map(({ name, url }) => (
        <Link href={`/home/${url}`} key={url}>
          <button
            className={`p-2 px-4 text-sm w-full ${
              pathname === `/home/${url}`
                ? "border-b border-black"
                : "border-b border-white"
            }`}
          >
            {name}
          </button>
        </Link>
      ))}
    </footer>
  );
}
