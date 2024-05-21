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
        <div className="bg-white w-[98%] mx-auto px-2 py-1 rounded-md">
          <ul>
            <li className="flex justify-between items-center border-b-2 border-black mb-4">
              <div className="space-y-0">
                <div className="text-xl m-0 p-0">Election Name</div>
                <div className="text-xs">election description</div>
              </div>
              <div className="pr-4">Actions</div>
            </li>

            {elections.map((election, index) => (
              <li
                key={election.id}
                className={`flex justify-between items-center ${
                  index % 2 === 0 ? "bg-gray-300" : ""
                }`}
              >
                <div
                  className={`flex flex-col text-sm py-2 ${
                    index % 2 === 0 ? "bg-gray-300" : ""
                  }`}
                >
                  <div className="pl-2">
                    <p>{election.name}</p>
                    <p className="text-xs text-gray-800">
                      {election.description}
                    </p>
                  </div>
                </div>
                <div className="pr-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BiDotsHorizontalRounded className="w-6 h-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="end">
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
              </div>
            </li>
            {elections.map((election, index) => (
              <li key={election.id}>
                <div
                  className={`grid grid-cols-7 pt-2 pb-2 pl-2 text-sm gap-4 ${
                    index % 2 === 0 ? "bg-gray-300" : ""
                  }`}
                >
                  <p>{election.name}</p>
                  <p>{election.description}</p>
                  <p>{election.electionDate}</p>
                  <p>{election.status}</p>
                  <p>{election.electionType}</p>
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
