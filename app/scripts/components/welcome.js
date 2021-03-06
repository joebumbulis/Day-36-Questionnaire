import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import container from "../containers/all.js";
import Question from "./question.js";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClick({ history }) {
  //   return (
  //     <h1
  //       onClick={() =>
  //     //     history.push("/question/" + Number(this.props.match.params.id))}
  //     // >
  //     //   {" "}Previous{" "}
  //     //   {this.props.questions.map((question, )=> {
  //     //     return < />
  //     //   })}
  //     </h1>
  //   );
  // }

  render() {
    return (
      <section>
        <h3>Answer these 10 questions for Better Productivity</h3>
        <h4><Link to="/question/1">START</Link></h4>
        {this.props.questions.map((question, ind) => {
          return (
            <div>
              <Link to={`/question/${question.questionNumber}`} key={ind}>
                {question.question}
              </Link>
            </div>
          );
        })}
      </section>
    );
  }
}

export default connect(container.allState)(Welcome);
