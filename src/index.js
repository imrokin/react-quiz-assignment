import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
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

  // Function to get question from ./question
  getQuestions = () => {
    questionService().then(question => {
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  startAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  // Function to compute scores
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

  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
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
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
