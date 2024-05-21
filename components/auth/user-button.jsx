import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./logout-button";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { CheckCheckIcon } from "lucide-react";
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
        <LogoutButton>
          <DropdownMenuItem className="flex items-center gap-4">
            <ExitIcon className="w-4 h-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
        <Link href="/new-election" variant="ghost" className="w-full">
          <DropdownMenuItem className="flex items-center gap-4">
            <CheckCheckIcon className="w-4 h-4 mr-2" />
            New Election
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
