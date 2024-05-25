"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const addBallotToElection = async (electionId, ballot) => {
  const { user } = await auth();

  const election = await db.election.findUnique({
    where: {
      id: electionId,
    },
  });

  if (!election) {
    return { error: "Election does not exist!" };
  }

  if (election.userId !== user.id) {
    return { error: "Unauthorized" };
  }

  const newBallot = await db.ballot.create({
    data: {
      electionId,
      ...ballot,
    },
  });

  return newBallot;
};
