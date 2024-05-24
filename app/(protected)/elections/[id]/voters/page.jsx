import { getElectionById } from "@/actions/elections";
import { ElectionHeader } from "@/components/election/election-header";
import { Button } from "@/components/ui/button";
import { VoterList } from "@/components/voer-list";
import React from "react";

const VotersPage = async ({ params }) => {
  const electionId = params.id;

  const election = await getElectionById(electionId);

  if (!election) {
    return <div>404</div>;
  }

  return <VoterList election={election} />;
};

export default VotersPage;
