import React from "react";

const ElectionOverviewPage = ({ params }) => {
  const electionId = params.id;
  return (
    <div>
      ElectionOverviewPage <br /> {electionId} {}
    </div>
  );
};

export default ElectionOverviewPage;
