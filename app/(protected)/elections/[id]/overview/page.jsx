import { getElectionById } from "@/actions/elections";
import { ElectionHeader } from "@/components/election/election-header";
import React from "react";

const ElectionOverviewPage = async ({ params }) => {
  const electionId = params.id;

  const election = await getElectionById(electionId);

  if (!election) {
    return <div>404</div>;
  }

  return (
    <div className="w-full">
      <ElectionHeader election={election} />
      <div className="w-full p-2 mt-2">
        <div className="w-2/3">
          <div className="w-full bg-white rounded-lg shadow-md h-96">
            <h1 className="p-4 text-xl font-bold">
              Ballot Submissions By Date
            </h1>
            <hr className="w-full border-t border-gray-300" />
            <div className="p-4">
              <p>There are no submissions yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionOverviewPage;
