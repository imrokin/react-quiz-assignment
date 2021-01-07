import React from "react";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { submit, elapse } from "./actions";

import Question from "./components/Question";
import Result from "./components/Result";

const Quiz = () => {
  const dispatch = useDispatch();
  const questionBank = useSelector(state => state.question);
  const score = useSelector(state => state.score);
  const submited = useSelector(state => state.submited);
  const time = useSelector(state => state.time);

  if (time > 0) {
    setTimeout(() => dispatch(elapse(1)), 1000);
  }

  if (time == 0) {
    dispatch(submit());
  }

  return (
    <div className="container-fluid card my-5 py-5">
      {submited ? null : (
        <nav className="navbar fixed-top navbar-light bg-light d-flex justify-content-center">
          <a className="navbar-brand">Time Left : {time}s</a>
        </nav>
      )}
      {questionBank.length &&
        questionBank.map((question, index) => (
          <Question question={question} qIndex={index} key={index} />
        ))}

      {submited ? (
        <Result score={score} />
      ) : (
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <button
            className="btn btn-success w-100 m-2"
            onClick={() => {
              dispatch(submit());
            }}
          >
            Submit
          </button>
        </nav>
      )}
    </div>
  );
};

export default Quiz;
