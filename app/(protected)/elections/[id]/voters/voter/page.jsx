import VoterForm from "@/components/voter-form";
import React from "react";

const AddVotersPage = ({ params }) => {
  const electionId = params.id;
  return (
    <div className="flex justify-center w-full">
      <VoterForm electionId={electionId} />
    </div>
  );
};

export default AddVotersPage;
