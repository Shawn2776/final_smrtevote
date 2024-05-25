import { getElectionById } from "@/actions/elections";
import { VoterList } from "@/components/voter-list";
import React from "react";

const VotersPage = async ({ params }) => {
  const electionId = params.id;

  const election = await getElectionById(electionId);

  if (!election) {
    return <div>404</div>;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <VoterList election={election} />
    </div>
  );
};

export default VotersPage;
