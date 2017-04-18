import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Results extends React.Component {

  constructor (props) {
    super(props);
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Results Clicked");
    // this.setState({
    //   name: e.target.value
    // })
  }

  render () {

    return (
      <section>
        <h2>Results</h2>
        {this.props.questions.map((question, j)=>{
          return <p key={j}>{question.question}</p>
        })};
        {this.props.answers.map((answer, j)=>{
          return <p key={j}>{answer.answer}</p>
        })};
        <button onClick={this.handleClick}>SUBMIT</button>
      </section>
    );
  }
}

export default connect(container.allState)(Results);
