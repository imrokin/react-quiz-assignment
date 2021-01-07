import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { start } from "../actions";

const Result = ({ score }) => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div
        className={`alert w-100 ${
          score > 0 ? "alert-success" : "alert-danger"
        }`}
      >
        {score} correct answers.
      </div>

      <button
        className="btn btn-warning m-2 w-100"
        onClick={() => {
          dispatch(start());
        }}
      >
        Start Again
      </button>
    </nav>
  );
};

export default Result;
