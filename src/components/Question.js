import React, { useState } from "react";

const Questions = ({ question, selected }) => {
  const [answer, setAnswer] = useState(question["options"]);
  return (
    <div className="row">
      <div className="col-12">{question["title"]}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="col-2 m-2 btn btn-primary"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Questions;
