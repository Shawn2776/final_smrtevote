import { getElectionById, getElectionsByUserId } from "@/actions/elections";
import { auth } from "@/auth";
import { Router } from "next/navigation";
import Sidebar from "../../_components/sidebar";

const ElectionLayout = async ({ children, params }) => {
  const electionId = params.id;
  const { user } = await auth();

  const exisitingElection = await getElectionById(electionId);

  if (exisitingElection.userId !== user.id) {
    return <div>Election not found</div>;
  }

  return (
    <div className="grid grid-cols-12 g-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="flex flex-col items-center w-full h-screen col-span-1 text-white">
        <Sidebar electionId={electionId} />
      </div>
      <div className="col-span-11 p-2 pl-10">{children}</div>
    </div>
  );
};

export default ElectionLayout;
