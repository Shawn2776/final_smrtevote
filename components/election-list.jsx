import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DeleteIcon } from "lucide-react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Button } from "./ui/button";

const ElectionsList = ({ elections }) => {
  return (
    <>
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
                <div className="flex flex-col w-4/6 ">
                  <p>{election.name}</p>
                  <span className="text-xs text-gray-700">
                    {election.description}
                  </span>
                </div>

                <div className="w-1/6">
                  <p className="flex justify-start w-full ">
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
                  <p>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BiDotsHorizontalRounded className="w-6 h-6" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-32" align="end">
                        <Link
                          href={`/elections/${election.id}`}
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
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden w-full h-full lg:flex">
        <div className="p-4 ml-10 mr-10 bg-white rounded-md">
          <ul>
            <li>
              <div className="grid grid-cols-7 pl-4 mb-4 font-extrabold">
                <p>Name</p>
                <p>Description</p>
                <p>Date</p>
                <p>Status</p>
                <p>Type</p>
                <p>Candidates</p>
                <p>Actions</p>
              </div>
            </li>
            {elections.map((election, index) => (
              <li key={election.id}>
                <div
                  className={`grid grid-cols-7 pt-2 pb-2 pl-2 text-sm gap-4 items-center ${
                    index % 2 === 0 ? "bg-gray-300" : ""
                  }`}
                >
                  <p>{election.name}</p>
                  <p>{election.description}</p>
                  <p>{election.electionDate}</p>
                  <p>
                    <span
                      className={`px-2 py-1 border shadow-md shadow-black border-black ${
                        election.status === "PENDING"
                          ? "bg-orange-400 text-black"
                          : election.status === "OPEN"
                          ? "bg-green-400 text-black"
                          : "bg-red-400 text-black"
                      }`}
                    >
                      {election.status}
                    </span>
                  </p>
                  <p className="capitalize">{election.electionType}</p>
                  <p>{election.candidates}</p>
                  <p>
                    <Button asChild variant="outline">
                      <Link
                        href={`/elections/${election.id}`}
                        variant="outline"
                        className="w-full"
                      >
                        View
                      </Link>
                    </Button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ElectionsList;
