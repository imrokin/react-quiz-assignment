import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, response } from "../actions";

const Questions = ({ question, qIndex }) => {
  const dispatch = useDispatch();
  return (
    <div className="row  p-2">
      <div className="col-12">{question["title"]}</div>
      {question["options"].map((option, index) => (
        <button
          key={index}
          className="col-2 m-2 btn btn-primary"
          onClick={() => {
            if (option == question["correct"]) {
              dispatch(increment());
            }
            dispatch(response({ index: qIndex, option: option }));
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Questions;
