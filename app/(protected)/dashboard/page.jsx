import { auth } from "@/auth";
import { getElectionsByUserId } from "@/actions/elections";
import { ElectionList } from "@/components/election-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>Loading...</div>;
  }

  const elections = await getElectionsByUserId(session.user.id);

  if (elections.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Button>
          <Link href="/new-election">Create New Election</Link>
        </Button>
      </div>
    );
  }

  return <ElectionList elections={elections} />;
};

export default DashboardPage;
