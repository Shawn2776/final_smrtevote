import NewQuestionTestForm from "@/actions/test";
import NewQuestionForm from "@/components/question-form";
import React from "react";

const BallotPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <NewQuestionTestForm />
    </div>
  );
};

export default BallotPage;
