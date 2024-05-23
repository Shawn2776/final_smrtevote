import { getElectionById, getElectionsByUserId } from "@/actions/elections";
import { auth } from "@/auth";
import { Router } from "next/navigation";
import Sidebar from "../../_components/sidebar";

const ElectionLayout = async ({ children, params }) => {
  const electionId = params.id;
  const { user } = await auth();

  const exisitingElection = await getElectionById(electionId);

  // if (!exisitingElection?.electionId) {
  //   return <div>Election not found</div>;
  // }

  if (exisitingElection?.userId !== user.id) {
    return <div>Election not found</div>;
  }

  return (
    <div className="flex lg:grid lg:grid-cols-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="flex flex-col items-center flex-1 w-full h-screen text-white lg:col-span-1">
        <Sidebar electionId={electionId} />
      </div>
      <div className="flex flex-2 lg:p-2 lg:col-span-11 lg:pl-10">
        {children}
      </div>
    </div>
  );
};

export default ElectionLayout;
