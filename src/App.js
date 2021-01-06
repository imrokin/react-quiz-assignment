import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

import Question from "./components/Question";
import Result from "./components/Result";

const Quiz = () => {
  const questionBank = useSelector(state => state.question);
  const score = useSelector(state => state.score);
  const responses = useSelector(state => state.response);
  return (
    <div className="container-fluid">
      {questionBank.length &&
        questionBank.map(question => (
          <Question
            question={question}
            key={question.id}
            selected={answer => this.computeAnswer(answer, question["correct"])}
          />
        ))}

      {responses === questionBank.length ? (
        <Result score={score} startAgain={this.startAgain} />
      ) : null}
    </div>
  );
};

export default Quiz;
