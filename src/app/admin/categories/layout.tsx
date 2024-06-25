import Footer from "./Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <h1 className="text-xl font-bold ">Categories</h1>

      {children}
      <Footer />
    </div>
  );
}
