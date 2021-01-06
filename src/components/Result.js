import React from "react";
import "../style.css";

const Result = ({ score, startAgain }) => (
  <div className="row">
    <div className="col-12 alert alert-success m-2">
      {score} correct answers.
    </div>
    <button className="btn btn-success m-2" onClick={startAgain}>
      Start Again
    </button>
  </div>
);

export default Result;
