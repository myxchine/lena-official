"use client";

import { useState } from "react";
import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/sideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { verifyPassword } from "@/server/db/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isPasswordCorrect = await verifyPassword(password);

    if (isPasswordCorrect) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="p-4 flex items-center justify-center h-screen">
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enter
          </button>
        </form>
      </main>
    );
  }
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex fixed w-screen h-screen">
        <Sidebar />
        <main className="w-full overflow-y-auto">
          <Header />
          {children}
        </main>
      </div>
    </QueryClientProvider>
  );
}
