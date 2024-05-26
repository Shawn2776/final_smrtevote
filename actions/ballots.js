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
    return { error: "Unauthorized why?" };
  }

  const newBallot = await db.ballot.create({
    data: {
      electionId,
      ...ballot,
    },
  });

  return newBallot;
};

export const getBallotByElectionId = async (electionId) => {
  const { user } = await auth();

  const election = await db.election.findUnique({
    where: {
      id: electionId,
    },
    include: {
      ballot: true,
    },
  });

  if (!election) {
    return { error: "Election does not exist!" };
  }

  if (election.userId !== user.id) {
    return { error: "Unauthorized why?" };
  }

  const ballot = await db.ballot.findUnique({
    where: {
      id: election.ballotId,
    },
    include: {
      candidates: true,
      questions: true,
    },
  });

  return ballot;
};
