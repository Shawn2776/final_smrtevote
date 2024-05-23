"use client";

import { GearIcon } from "@radix-ui/react-icons";
import {
  ArrowBigLeft,
  LineChartIcon,
  ListChecksIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHouseUser } from "react-icons/fa";

const Sidebar = ({ electionId }) => {
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

  const links = [
    {
      name: "overview",
      icon: <FaHouseUser className="w-5 h-5" />,
      href: `/elections/${electionId}/overview`,
    },
    {
      name: "results",
      icon: <LineChartIcon className="w-5 h-5" />,
      href: `/elections/${electionId}/results`,
    },
    {
      name: "voters",
      icon: <User2Icon className="w-5 h-5" />,
      href: `/elections/${electionId}/voters`,
    },
    {
      name: "ballot",
      icon: <ListChecksIcon className="w-5 h-5" />,
      href: `/elections/${electionId}/ballot`,
    },
    {
      name: "settings",
      icon: <GearIcon className="w-5 h-5" />,
      href: `/elections/${electionId}/settings`,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full pt-2 bg-black">
      <Link
        href="/dashboard"
        className="flex items-center w-full gap-4 pb-3 pl-4 text-xs text-centers"
      >
        <ArrowBigLeft className="w-5 h-5 font-normal" /> Return to Dashboard
      </Link>
      <hr className="w-full pb-4 text-white" />
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="w-full">
          <div
            className={`w-full capitalize flex items-center gap-4 pl-4 p-2 ${
              lastSegment === link.name ? "bg-[#2873CD]" : ""
            }`}
          >
            {link.icon} {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
