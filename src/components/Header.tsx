import { MdOutlinePhoto } from "react-icons/md";
import { RiPencilRuler2Line } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 w-full flex flex-row items-center justify-between p-4">
      <Announcement />
      <Link href="/">
        <MdOutlinePhoto className="text-2xl" />
      </Link>
      <Link href="/">
        <div>
          <h1 className="text-3xl  text-center">Lena Pietrzak</h1>
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

function Announcement() {
  return (
    <div className="bg-black/80 text-white p-4 rounded-lg">
      <p className="text-center">
        <b>Announcement:</b> I'm currently studying at IFM, Institut Français de
        la Mode.
      </p>
    </div>
  );
}
