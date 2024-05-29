import { addVoterToElection } from "@/actions/voters";
import { ElectionHeader } from "./election/election-header";
import { Button } from "./ui/button";
import Link from "next/link";
import VoterTable from "./tables/voters-table";

export const VoterList = ({ election }) => {
  return (
    <div className="flex flex-col w-full">
      <ElectionHeader election={election} />
      <div className="w-full p-2 mt-2">
        <div className="flex justify-between w-full pl-10 pr-10">
          <h1 className="text-2xl">Voters</h1>
          <div className="flex gap-2">
            <Button>Import</Button>
            <Button>
              <Link href={`/elections/${election.id}/voters/voter`}>
                Add Voter
              </Link>
            </Button>
            <Button>...</Button>
          </div>
        </div>
        {election.voters.length < 1 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button>
              <Link href={`/elections/${election.id}/voters/voter`}>
                Add Voter
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <VoterTable voters={election.voters} />
            <hr className="w-full mx-auto mb-4" />
            <Button asChild>
              <Link href={`/elections/${election.id}/voters/voter`}>
                Add Voter
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

{
  /* election.voters.map((voter) => (
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
)) */
}
