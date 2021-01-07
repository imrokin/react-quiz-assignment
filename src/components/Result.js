import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { start } from "../actions";

const Result = ({ score }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-12 p-2">
        <div
          className={`alert ${score > 0 ? "alert-success" : "alert-danger"}`}
        >
          {score} correct answers.
        </div>
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
