"use client";

import { ElectionHeader } from "./election/election-header";
import { Button } from "./ui/button";
import Link from "next/link";

export const BallotList = ({ election, ballot }) => {
  const inBallot = ballot;
  console.log(inBallot.ballot.questions);
  return (
    <div className="flex flex-col w-full">
      <ElectionHeader election={election} />
      <div className="w-full p-2 mt-2">
        <div className="flex justify-between w-full pl-10 pr-10">
          <h1 className="text-2xl">Ballot</h1>
          <div className="flex gap-2">
            <Button>Import</Button>
            <Button>
              <Link href={`/elections/${election.id}/voters/voter`}>
                Export Ballot
              </Link>
            </Button>
            <Button>...</Button>
          </div>
        </div>
        {election.electionType === "election" &&
        inBallot?.candidates?.length === 0 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button>Add Candidate</Button>
          </div>
        ) : (
          election.electionType === "election" &&
          inBallot?.candidates?.map((candidate) => (
            <div
              key={candidate.id}
              className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
            >
              <p className="col-span-1 text-xl font-bold">{candidate.name}</p>
              <p className="col-span-1">{candidate.email}</p>
              <p className="col-span-1">{candidate.candidateId}</p>
              <p className="col-span-1">{candidate.candidateKey}</p>
              <p className="col-span-1">
                {candidate.hasVoted ? "Has Voted" : "Has Not Voted"}
              </p>
            </div>
          ))
        )}
        {election.electionType === "poll" &&
        inBallot.ballot.questions.length === 0 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button asChild>
              <Link
                href={`/elections/${election.id}/ballot/ballot?ballotId=${election.ballotId}`}
              >
                Add Question
              </Link>
            </Button>
          </div>
        ) : (
          inBallot.ballot.questions.map((question) => (
            <div
              key={question.id}
              className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
            >
              <p className="col-span-1 text-xl font-bold">
                {question.question}
              </p>
              <p className="col-span-1">{question.option1}</p>
              <p className="col-span-1">{question.option2}</p>
              <p className={question.option3 ? "col-span-1" : "hidden"}>
                {question.option3 || null}
              </p>
              <p className={question.option4 ? "col-span-1" : "hidden"}>
                {question.option4 || null}
              </p>
            </div>
          ))
        )}
        {election.electionType === "poll" ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button asChild>
              <Link
                href={`/elections/${election.id}/ballot/new-question?ballotId=${election.ballotId}`}
              >
                Add Question
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button asChild>
              <Link
                href={`/elections/${election.id}/ballot/new-candidate?ballotId=${election.ballotId}`}
              >
                Add Candidate
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// election.ballots?.map((ballot) => (
//   <div
//     key={ballot.id}
//     className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
//   >
//     <p className="col-span-1 text-xl font-bold">{ballot.name}</p>
//     {/* <p className="col-span-1">{ballot.email}</p>
//     <p className="col-span-1">{ballot.ballotId}</p>
//     <p className="col-span-1">{ballot.ballotKey}</p>
//     <p className="col-span-1">
//       {ballot.hasVoted ? "Has Voted" : "Has Not Voted"}
//     </p> */}
//   </div>
// ))