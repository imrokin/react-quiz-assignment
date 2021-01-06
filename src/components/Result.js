import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { start } from "../actions";

const Result = ({ score }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-12 alert alert-success m-2">
        {score} correct answers.
      </div>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch(start());
        }}
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;
