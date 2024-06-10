import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lena Pietrzak",
  description: "Curated by Duality Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
