import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="p-8">
        <header className="w-full flex flex-col items-center justify-center  space-y-2">
          <h1 className="text-3xl font-bold text-center">Lena Pietrzak</h1>
          <p className="text-center text-sm text-black/80">
            Portugal - London - Paris
          </p>
        </header>
      </div>
    </main>
  );
}
