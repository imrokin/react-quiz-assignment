import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, response } from "../actions";

import Videojs from "../Video.js";

const Questions = ({ question, qIndex }) => {
  const dispatch = useDispatch();
  const submited = useSelector(state => state.submited);

  const videoJsOptions = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: question["video"],
        type: "video/mp4"
      }
    ]
  };

  return (
    <div className="row  p-2 border-bottom">
      <div className="col-12 d-flex flex-column align-items-start ">
        <h4>
          Q {qIndex + 1}. {question["title"]}
        </h4>
        <span>{question["content"]}</span>
        <img className="my-1" src={question["img"]} />
        {question["video"] ? (
          <Videojs className="w-100" {...videoJsOptions} />
        ) : null}
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
            if (option.toLowerCase() == question["correct"].toLowerCase()) {
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
