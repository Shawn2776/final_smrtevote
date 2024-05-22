import { getElectionById } from "@/actions/elections";
import { Election } from "@/components/election";
import Link from "next/link";

import React from "react";

const ElectionPage = async ({ params }) => {
  const election = await getElectionById(params.id);

  if (!election) {
    return <div>Election not found</div>;
  }

  return (
    <div className="grid w-full h-full grid-cols-12">
      <div className="flex flex-col items-center col-span-1 bg-white">
        <Link href={`/elections/${params.id}`}>Overview</Link>
      </div>
      <div className="col-span-10">etst</div>
    </div>
  );
};

export default ElectionPage;
