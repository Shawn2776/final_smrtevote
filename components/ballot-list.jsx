"use client";

import { ElectionHeader } from "./election/election-header";
import { Button } from "./ui/button";
import Link from "next/link";

export const BallotList = ({ election }) => {
  return (
    <div className="flex flex-col w-full">
      <ElectionHeader election={election} />
      <div className="w-full p-2 mt-2">
        <div className="flex justify-between w-full pl-10 pr-10">
          <h1 className="text-2xl">Ballot</h1>
          <div className="flex gap-2">
            <Button>Import</Button>
            <Button>
              <Link href={`/elections/${election.id}/voters/voter`}>
                Export Ballot
              </Link>
            </Button>
            <Button>...</Button>
          </div>
        </div>
        {election.ballots?.length < 1 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button>Create Ballot</Button>
          </div>
        ) : (
          election.ballots?.map((ballot) => (
            <div
              key={ballot.id}
              className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
            >
              <p className="col-span-1 text-xl font-bold">{ballot.name}</p>
              {/* <p className="col-span-1">{ballot.email}</p>
              <p className="col-span-1">{ballot.ballotId}</p>
              <p className="col-span-1">{ballot.ballotKey}</p>
              <p className="col-span-1">
                {ballot.hasVoted ? "Has Voted" : "Has Not Voted"}
              </p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
