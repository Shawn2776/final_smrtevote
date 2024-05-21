import { auth } from "@/auth";
import { getElectionsByUserId } from "@/actions/elections";
import ElectionsList from "@/components/election-list";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>Loading...</div>;
  }

  const elections = await getElectionsByUserId(session.user.id);

  return <ElectionsList elections={elections} />;
};

export default DashboardPage;
