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
        <table>
          <tr>
            {this.props.questions.map((question, j)=>{
              return <th key={j}>{question.question}</th>
            })}
          </tr>
          <tr>
            {this.props.answers.map((answer, j)=>{
              return <td key={j}>{answer.answer}</td>
            })}
            </tr>
        </table>
        <button onClick={this.handleClick}>SUBMIT</button>
      </section>
    );
  }
}

export default connect(container.allState)(Results);
