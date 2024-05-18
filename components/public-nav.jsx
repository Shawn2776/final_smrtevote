"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PublicNavbar() {
  const [state, setState] = React.useState(false);

  const pathname = usePathname();

  const menus = [
    { title: "Pricing", path: "/pricing" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black ">
      <div className="items-center max-w-screen-xl px-4 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <h1 className="relative w-[150px] h-10 ">
            <Link href="/">
              <Image src="/smrtevote.png" fill alt="SMRTeVote Logo" />
            </Link>
          </h1>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`text-neutral-200 hover:text-indigo-600 ${
                  pathname === item.path ? "border-b-2" : ""
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="px-6 py-2 text-white transition-all duration-300 border rounded-md bg-sky-500 border-sky-500 hover:bg-white hover:text-sky-500">
            Sign Up
          </button>
          <button className="px-6 py-2 transition-all duration-300 text-sky-500 rounded-r-md hover:text-red-600">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
