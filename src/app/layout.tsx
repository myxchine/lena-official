import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lenaptzk.com",
    title: "Lena Pietrzak",
    description:
      "I am Lena Barbara Pietrzak, a Fashion Model now in Paris, studying at IFM, Institut Français de la Mode. Originally from Poland and raised in Portugal, love London.",
    images: [
      {
        url: "https://lenaptzk.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lena Pietrzak",
      },
    ],
    siteName: "Lena Pietrzak",
  },
  title: "Lena Pietrzak",
  description:
    "I am Lena Barbara Pietrzak, a Fashion Model now in Paris, studying at IFM, Institut Français de la Mode. Originally from Poland and raised in Portugal, love London.",
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
