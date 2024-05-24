"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const addVoterToElection = async (electionId, values) => {
  const { user } = await auth();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const exisitingElection = await db.election.findUnique({
    where: {
      id: electionId,
    },
  });

  // Check if election exists
  if (!exisitingElection) {
    return { error: "Election does not exist!" };
  }

  // Check if user is authorized to add voter
  if (exisitingElection.userId !== user.id) {
    return { error: "Unauthorized" };
  }

  const { name, email, voterId, voterKey } = values;

  const voter = await db.voter.create({
    data: {
      name,
      email,
      voterId,
      voterKey,
      electionId,
    },
  });

  return voter;
};
