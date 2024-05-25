"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getElectionsByUserId = async (userId) => {
  const { user } = await auth();
  if (userId !== user.id) {
    return { error: "Unauthorized" };
  }
  const elections = await db.election.findMany({
    where: {
      userId,
    },
  });

  return elections;
};

export const deleteElectionById = async (electionId) => {
  const { user } = await auth();
  const exisitingElection = await db.election.findUnique({
    where: {
      id: electionId,
    },
  });

  if (!exisitingElection) {
    return { error: "Election does not exist!" };
  }

  if (exisitingElection.userId !== user.id) {
    return { error: "Unauthorized" };
  }

  await db.election.delete({
    where: {
      id: electionId,
    },
  });

  return { success: "Election deleted!" };
};

export const getElectionById = async (electionId) => {
  const { user } = await auth();

  const election = await db.election.findUnique({
    where: {
      id: electionId,
    },
    include: {
      voters: true,
      candidates: true,
      ballots: true,
    },
  });

  return election;
};

export const updateElectionById = async (electionId, values) => {
  const { user } = await auth();
  const exisitingElection = await db.election.findOne({
    where: {
      id: electionId,
    },
  });

  if (!exisitingElection) {
    return { error: "Election does not exist!" };
  }

  if (exisitingElection.userId !== user.id) {
    return { error: "Unauthorized" };
  }

  const election = await db.election.update({
    where: {
      id: electionId,
    },
    data: values,
  });

  return { success: "Election updated!" };
};
