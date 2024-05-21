import { getElectionById } from "@/actions/elections";
import { Election } from "@/components/election";
import React from "react";

const ElectionPage = async ({ params }) => {
  const election = await getElectionById(params.id);

  if (!election) {
    return <div>Election not found</div>;
  }

  return <Election election={election} />;
};

export default ElectionPage;
