import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],

  title: "Lena Pietrzak",
  description:
    "Fashion Model in Paris studying at IFM, Institut Français de la Mode. Originally from Poland and raised in Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
