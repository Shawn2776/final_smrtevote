import { auth } from "@/auth";
import { getElectionsByUserId } from "@/actions/elections";
import { ElectionList } from "@/components/election-list";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>Loading...</div>;
  }

  const elections = await getElectionsByUserId(session.user.id);

  return <ElectionList elections={elections} />;
};

export default DashboardPage;
