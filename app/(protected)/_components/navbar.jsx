"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
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
    <nav className="flex items-center justify-between w-full p-4 mx-auto mb-10 border-b max-w-7xl">
      <div className="flex gap-x-2">
        {links.map((link, idx) => (
          <Button
            asChild
            className={pathname === link.path ? "underline" : "ghost"}
            variant={pathname === link.path ? "" : "ghost"}
            key={idx}
          >
            <Link href={link.path}>{link.title}</Link>
          </Button>
        ))}
      </div>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default ProtectedNavbar;
