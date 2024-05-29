"use client";

import { deleteElectionById } from "@/actions/elections";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { TbListDetails } from "react-icons/tb";
import { DeleteIcon, Edit2Icon, Trash2Icon } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ElectionTable from "./tables/election-table";

export const ElectionList = ({ elections }) => {
  const router = useRouter();

  const onClickDelete = async (electionId) => {
    if (confirm("Are you sure you want to delete this election?")) {
      const response = await deleteElectionById(electionId);
      if (response.error) {
        alert(response.error);
      } else {
        alert(response.success);
      }
    }

    router.push("/dashboard");
  };

  return (
    <>
      {/* MOBILE */}
      <div className="flex flex-col w-full h-full lg:hidden">
        <ul className="bg-white">
          <li className="my-4">
            <div className="flex w-full pl-4 font-extrabold">
              <p className="w-4/6">Name</p>
              <p className="w-1/6">Status</p>
              <p className="w-1/6">Actions</p>
            </div>
          </li>
          {elections.map((election, index) => (
            <li key={election.id}>
              <div
                className={`w-full flex justify-center pt-2 pb-2 pl-2 text-sm gap-1 items-center ${
                  index % 2 === 0 ? "bg-gray-300" : ""
                }`}
              >
                <div className="flex flex-col w-4/6">
                  <p>{election.name}</p>
                  <span className="text-xs text-gray-700">
                    {election.description}
                  </span>
                </div>

                <div className="w-1/6">
                  <p className="flex justify-start w-full">
                    <span
                      className={`w-full text-xs flex justify-center px-2 py-1 border shadow-md rounded ${
                        election.status === "PENDING"
                          ? "bg-orange-400/35 text-orange-800 shadow-orange-800 border-orange-800"
                          : election.status === "OPEN"
                          ? "bg-emerald-400/35 text-emerald-800 shadow-emerald-800 border-emerald-800"
                          : "bg-red-400/35 text-red-800 shadow-red-800 border-red-800"
                      }`}
                    >
                      {election.status}
                    </span>
                  </p>
                </div>

                <div className="flex justify-center w-1/6">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BiDotsHorizontalRounded className="w-6 h-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32" align="end">
                      <Link
                        href={`/elections/${election.id}/overview`}
                        variant="ghost"
                        className="w-full"
                      >
                        <DropdownMenuItem className="flex items-center gap-4">
                          <FaEye className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="flex items-center gap-4">
                        <DeleteIcon className="w-4 h-4 mr-2" />
                        <button onClick={() => onClickDelete(election.id)}>
                          Delete
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* DESKTOP */}
      <div className="hidden w-full h-full lg:flex lg:flex-col">
        <hr className="w-full border-t border-gray-300" />
        <div className="w-full p-4 pl-10 pr-10 bg-white">
          <ElectionTable elections={elections} />
        </div>
      </div>
    </>
  );
};
