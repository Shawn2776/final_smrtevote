"use client";

import { ElectionHeader } from "./election/election-header";
import { Button } from "./ui/button";
import Link from "next/link";

export const BallotList = ({ election, ballot }) => {
  console.log(ballot);

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
        ballot.candidates.length === 0 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button>Add Candidate</Button>
          </div>
        ) : (
          election.electionType === "election" &&
          ballot.candidates.map((candidate) => (
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
        {election.electionType === "poll" && ballot.questions.length === 0 ? (
          <div className="flex flex-col justify-center w-full p-4 mx-auto mt-2">
            <hr className="w-full mx-auto mb-4" />
            <Button>Add Question</Button>
          </div>
        ) : (
          ballot.questions.map((question) => (
            <div
              key={question.id}
              className="grid w-full grid-cols-5 p-4 mt-2 bg-white rounded-lg shadow-md justify-evenly"
            >
              <p className="col-span-1 text-xl font-bold">{question.name}</p>
              <p className="col-span-1">{question.email}</p>
              <p className="col-span-1">{question.questionId}</p>
              <p className="col-span-1">{question.questionKey}</p>
              <p className="col-span-1">
                {question.hasVoted ? "Has Voted" : "Has Not Voted"}
              </p>
            </div>
          ))
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