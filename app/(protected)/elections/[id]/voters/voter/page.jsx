import VoterForm from "@/components/voter-form";
import React from "react";

const AddVotersPage = ({ params }) => {
  const electionId = params.id;
  return <VoterForm electionId={electionId} />;
};

export default AddVotersPage;
