"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Beauty", path: "/admin/categories/beauty" },
    { name: "Swimsuit", path: "/admin/categories/swim" },
    { name: "Editorial", path: "/admin/categories/editorial" },
    { name: "Shows", path: "/admin/categories/shows" },
  ];

  return (
    <div className="fixed bottom-0 left-0 bg-white w-full flex items-center justify-between space-x-2 py-4 px-4">
      <nav className="flex w-full">
        <ul className="flex space-x-2 w-full">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`p-2 px-4 text-sm w-full ${
                  pathname === link.path
                    ? "border-b border-black"
                    : "border-b border-transparent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
