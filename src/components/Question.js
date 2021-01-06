import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, response } from "../actions";

const Questions = ({ question, qIndex }) => {
  const dispatch = useDispatch();
  const submited = useSelector(state => state.submited);

  return (
    <div className="row  p-2">
      <div className="col-12 d-flex flex-column align-items-start">
        {question["title"]}
        <img className="my-1" src={question["img"]} />
        {submited ? (
          <span className="alert alert-warning my-1">
            {question["explaination"]}
          </span>
        ) : null}
      </div>

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
