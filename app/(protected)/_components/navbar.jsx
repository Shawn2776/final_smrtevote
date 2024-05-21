"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "SMRTeVote", path: "/" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Settings", path: "/settings" },
];

const ProtectedNavbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full h-20 px-4 mb-10 text-black bg-white shrink-0 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center justify-between w-full">
            <h1 className="relative h-10 bg-black rounded-md shadow-md w-44 shadow-gray-600">
              <Link href="/">
                <Image src="/smrtevote.png" fill alt="SMRTeVote Logo" />
              </Link>
            </h1>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="right">
          <Link className="hidden mr-6 lg:flex" href="#">
            <MountainIcon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ${
                pathname === "/dashboard"
                  ? "bg-gray-100 text-gray-900 underline"
                  : ""
              }`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ${
                pathname === "/settings"
                  ? "bg-gray-100 text-gray-900 underline"
                  : ""
              }`}
              href="/settings"
            >
              Settings
            </Link>
          </div>
          <hr className="border-gray-200 dark:border-gray-800 pb-4" />
          <div className="w-full flex justify-end">
            <UserButton />
          </div>
        </SheetContent>
      </Sheet>

      <Link className="hidden mr-6 lg:flex" href="#">
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden gap-6 ml-auto lg:flex">
        <Link
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ${
            pathname === "/dashboard"
              ? "bg-gray-100 text-gray-900 underline"
              : ""
          }`}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ${
            pathname === "/settings"
              ? "bg-gray-100 text-gray-900 underline"
              : ""
          }`}
          href="/settings"
        >
          Settings
        </Link>
        <UserButton />
      </nav>
    </header>
  );
};

export default ProtectedNavbar;

// return (
//   <nav className="flex items-center justify-between w-full p-4 mx-auto mb-10 border-b max-w-7xl">
//     <div className="flex gap-x-2">
//       {links.map((link, idx) => (
//         <Button
//           asChild
//           className={pathname === link.path ? "underline" : "ghost"}
//           variant={pathname === link.path ? "" : "ghost"}
//           key={idx}
//         >
//           <Link href={link.path}>{link.title}</Link>
//         </Button>
//       ))}
//     </div>
//     <div>
//       <UserButton />
//     </div>
//   </nav>
// );