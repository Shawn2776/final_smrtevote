import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./logout-button";

import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { CheckCheckIcon, User2Icon } from "lucide-react";
import Link from "next/link";

const UserButton = () => {
  const { data } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={data.user?.image || ""} />
          <AvatarFallback>
            <FaUser className="text-blue-800" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <div className="flex flex-col w-full text-xs">
          <span>{data.user?.name}</span>
          <span>{data.user?.email}</span>
          <hr className="my-2" />
        </div>
        <Link href="/new-election" variant="ghost" className="w-full">
          <DropdownMenuItem className="flex items-center gap-4">
            <CheckCheckIcon className="w-4 h-4 mr-2" />
            New Election
          </DropdownMenuItem>
        </Link>
        <Link href="/profile" variant="ghost" className="w-full">
          <DropdownMenuItem className="flex items-center gap-4">
            <User2Icon className="w-4 h-4 mr-2" />
            Profile
          </DropdownMenuItem>
        </Link>
        <Link href="/settings" variant="ghost" className="w-full">
          <DropdownMenuItem className="flex items-center gap-4">
            <GearIcon className="w-4 h-4 mr-2" />
            Settings
          </DropdownMenuItem>
        </Link>
        <hr className="my-2" />
        <LogoutButton>
          <DropdownMenuItem className="flex items-center gap-4">
            <ExitIcon className="w-4 h-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
