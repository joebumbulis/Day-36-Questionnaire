import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import container from "../containers/all.js";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Results Clicked");
    this.props.dispatch(postAnswers(answers));
  }

  render() {
    return (
      <section>
        <h2>Results</h2>
        <table>
          <thead>
            <tr>
              {this.props.questions.map((question, j) => {
                return <th key={j}>{question.question}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.props.answers.map((answer, j) => {
                return <td key={j}>{answer.answer}</td>;
              })}
            </tr>
          </tbody>
        </table>

        <button onClick={this.handleClick}>SUBMIT</button>
      </section>
    );
  }
}

export default connect(container.allState)(Results);
