import { MdAdd } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex flex-col w-full">
      <Announcement />

      <header className="w-full flex flex-row items-center justify-between p-4">
        <Link href="/">
          <div>
            <h1 className="text-2xl text-center">Lena Pietrzak</h1>
            <p className="text-left text-xs text-black/80 pl-[1px]">
              Portugal - London - Paris
            </p>
          </div>
        </Link>
        <Link
          href="/portfolio"
          className="bg-white hover:bg-black/20 text-black text-sm border border-black  py-1 px-2 rounded"
        >
          My Portfolio
        </Link>
      </header>
    </section>
  );
};

export default Header;

function Announcement() {
  return (
    <Link
      href="https://www.instagram.com/lenabpietrzak?igsh=MXkyanRrMWE3N2lqcQ=="
      target="_blank"
      rel="noopener noreferrer"
      className=" text-center hover:underline py-2 px-4 w-full border-b text-xs"
    >
      My Instagram {"->"}
    </Link>
  );
}
