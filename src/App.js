import React from "react";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { submit } from "./actions";

import Question from "./components/Question";
import Result from "./components/Result";

const Quiz = () => {
  const questionBank = useSelector(state => state.question);
  const score = useSelector(state => state.score);
  const submited = useSelector(state => state.submited);

  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      {questionBank.length &&
        questionBank.map((question, index) => (
          <Question question={question} key={index} />
        ))}

      {submited ? (
        <Result score={score} />
      ) : (
        <button
          className="btn btn-success m-2"
          onClick={() => {
            dispatch(submit());
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
