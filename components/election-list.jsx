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

const ElectionsList = ({ elections }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col lg:hidden">
        <ul className="bg-white">
          <li className="my-4">
            <div className="flex w-full font-extrabold pl-4">
              <p className="w-4/6">Name</p>
              <p className="w-1/6">Status</p>
              <p className="w-1/6">Actions</p>
            </div>
          </li>
          {elections.map((election, index) => (
            <li key={election.id}>
              <div
                className={`w-full flex justify-center pt-2 pb-2 pl-2 text-sm gap-4 items-center ${
                  index % 2 === 0 ? "bg-gray-300" : ""
                }`}
              >
                <div className="w-4/6 flex flex-col">
                  <p>{election.name}</p>
                  <span className="text-xs text-gray-700">
                    {election.description}
                  </span>
                </div>

                <div className="w-1/6">
                  <p className="w-full">
                    <span
                      className={`text-xs flex justify-start px-2 py-1 border shadow-md shadow-black border-black ${
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
                </div>

                <div className="w-1/6 flex justify-center">
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
      <div className="hidden lg:flex w-full h-full">
        <div className="p-4 ml-10 mr-10 bg-white rounded-md">
          <ul>
            <li>
              <div className="grid grid-cols-7 mb-4 font-extrabold pl-4">
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
                    <Link
                      href={`/elections/${election.id}`}
                      variant="ghost"
                      className="w-full"
                    >
                      View
                    </Link>
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
