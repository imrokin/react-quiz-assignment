import React, { useState } from "react";

const Questions = ({ question, selected }) => {
  const [answer, setAnswer] = useState(question["options"]);
  return (
    <div className="row  p-2">
      <div className="col-12">{question["title"]}</div>
      {answer.map((option, index) => (
        <button
          key={index}
          className="col-2 m-2 btn btn-primary"
          onClick={() => {
            setAnswer([option]);
            selected(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Questions;
