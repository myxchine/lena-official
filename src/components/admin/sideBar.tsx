import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar hidden md:block w-80 bg-white bg-opacity-90 text-black text-xs sticky border-r border-gray-200">
      <div className="flex items-center justify-between border-b border-gray-200 p-4 px-6 h-[80px]">
        <h2 className="text-xl font-bold">DUALITY</h2>
      </div>
      <div className="p-4 space-y-8">
        <ul className="space-y-2">
          <Link href="/admin" className="w-full">
            <li
              className={clsx(
                "py-2 cursor-pointer flex items-center hover:bg-gray-100 p-2 rounded-lg",
                {
                  "bg-gray-100": pathname === "/admin",
                }
              )}
            >
              <div className="flex items-center">
                <BarChartIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">Home</span>
              </div>
            </li>
          </Link>

          <Link href="/admin/categories" className="w-full">
            <li
              className={clsx(
                "py-2 cursor-pointer flex items-center hover:bg-gray-100 p-2 rounded-lg",
                {
                  "bg-gray-100": pathname === "/admin/categories",
                }
              )}
            >
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">Categories</span>
              </div>
            </li>
          </Link>
          <Link href="/admin/photos" className="w-full">
            <li
              className={clsx(
                "py-2 cursor-pointer flex items-center hover:bg-gray-100 p-2 rounded-lg",
                {
                  "bg-gray-100": pathname === "/admin/photos",
                }
              )}
            >
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">Photos</span>
              </div>
            </li>
          </Link>
          <Link href="/admin/patient" className="w-full">
            <li
              className={clsx(
                "py-2 cursor-pointer flex items-center hover:bg-gray-100 p-2 rounded-lg",
                {
                  "bg-gray-100": pathname === "/admin/patient",
                }
              )}
            ></li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function UserPlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function FilePenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
