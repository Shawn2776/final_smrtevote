import { db } from "@/lib/db";

export const getElectionsByUserId = async (userId) => {
  const elections = await db.election.findMany({
    where: {
      userId,
    },
  });

  return elections;
};

export const deleteElectionById = async (electionId) => {
  await db.election.delete({
    where: {
      id: electionId,
    },
  });

  return { success: "Election deleted!" };
};

export const getElectionById = async (electionId) => {
  const election = await db.election.findUnique({
    where: {
      id: electionId,
    },
  });

  return election;
};

export const updateElectionById = async (electionId, values) => {
  const election = await db.election.update({
    where: {
      id: electionId,
    },
    data: values,
  });

  return { success: "Election updated!" };
};
