import { MdAdd } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between p-4">
      <Link href="/">
        <div>
          <h1 className="text-2xl font-bold text-center">Lena Pietrzak</h1>
          <p className="text-left text-xs text-black/80 pl-[1px]">
            Portugal - London - Paris
          </p>
        </div>
      </Link>
      <MdAdd className="text-2xl " />
    </header>
  );
};

export default Header;
