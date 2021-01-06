import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { createStore } from "redux";
import allReducers from "./reducer";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import questionService from "./question";
import Question from "./components/Question";
import Result from "./components/Result";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0
    };
  }

  getQuestions = () => {
    questionService().then(question => {
      this.setState({ questionBank: question });
    });
  };

  startAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <Provider>
        <div className="container-fluid">
          {this.state.questionBank.length &&
            this.state.questionBank.map(question => (
              <Question
                question={question}
                key={question.id}
                selected={answer =>
                  this.computeAnswer(answer, question["correct"])
                }
              />
            ))}

          {this.state.responses === this.state.questionBank.length ? (
            <Result score={this.state.score} startAgain={this.startAgain} />
          ) : null}
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
