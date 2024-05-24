import { getElectionById } from "@/actions/elections";
import { ElectionHeader } from "@/components/election/election-header";
import { Button } from "@/components/ui/button";
import React from "react";

const VotersPage = async ({ params }) => {
  const electionId = params.id;

  const election = await getElectionById(electionId);

  console.log(election);

  if (!election) {
    return <div>404</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <ElectionHeader election={election} />
      <div className="w-full p-2 mt-2">
        <div className="flex justify-between w-full pl-10 pr-10">
          <h1 className="text-2xl">Voters</h1>
          <div className="flex gap-2">
            <Button>Import</Button>
            <Button>Add Voter</Button>
            <Button>...</Button>
          </div>
        </div>
        {election.voters.length === 0 ? (
          <div className="flex justify-center w-full"></div>
        ) : (
          election.voters.map((voter) => (
            <div
              key={voter.id}
              className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
            >
              <p className="col-span-1 text-xl font-bold">{voter.name}</p>
              <p className="col-span-1">{voter.email}</p>
              <p className="col-span-1">{voter.voterId}</p>
              <p className="col-span-1">{voter.voterKey}</p>
              <p className="col-span-1">
                {voter.hasVoted ? "Has Voted" : "Has Not Voted"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VotersPage;
