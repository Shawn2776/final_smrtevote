import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Header = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth</h1> */}
      <h1 className="relative w-1/2 h-10 bg-black rounded-md shadow-md shadow-gray-600">
        <Link href="/">
          <Image src="/smrtevote.png" fill alt="SMRTeVote Logo" />
        </Link>
      </h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
