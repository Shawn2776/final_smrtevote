"use client";

import { GearIcon } from "@radix-ui/react-icons";
import { ListChecksIcon, User2Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHouseUser } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

  console.log(lastSegment);

  return <div className="flex flex-col items-center w-full"></div>;
};

export default Sidebar;
