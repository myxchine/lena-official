import { MdOutlinePhoto } from "react-icons/md";
import { RiPencilRuler2Line } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between p-4">
      <Link href="/">
        <MdOutlinePhoto className="text-2xl" />
      </Link>
      <Link href="/">
        <div>
          <h1 className="text-3xl font-bold text-center">Lena Pietrzak</h1>
          <p className="text-center text-sm text-black/80">
            Portugal - London - Paris
          </p>
        </div>
      </Link>
      <Link href="/about">
        <RiPencilRuler2Line className="text-2xl" />
      </Link>
    </header>
  );
};

export default Header;
