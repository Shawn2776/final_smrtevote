import { db } from "@/lib/db";

export const getElectionsByUserId = async (userId) => {
  const elections = await db.election.findMany({
    where: {
      userId,
    },
  });

  return elections;
};
