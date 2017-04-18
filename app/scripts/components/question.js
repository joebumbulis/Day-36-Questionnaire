import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import answerQuestion from '../actions/answerQuestion.js'

class Question extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("Answered Clicked");
    let answer = this.refs.answer.value;
    // answer.value = " ",
    this.props.dispatch(answerQuestion(answer, this.props.match.params.id))
  }

  render () {
    if (this.props.onlyQuestion){
      return <p>{this.props.question.question}</p>
    }  else {
      //This should be changed to use filter() to grab the question by ID
      // var question = this.props.questions[this.props.match.params.id]
      var question = this.props.questions.filter((question, ind, arr)=>{
        return question.questionNumber == this.props.match.params.id;
      })[0];
// save input to state  but validate form first
      return (<div>
                {question.question}
                <input ref="answer" type="text" />
                <h4 onClick={this.handleClick}><Link to={"/question/" +  (Number(this.props.match.params.id) + 1)}>next</Link></h4>
              </div>)
    }
  }
}

export default connect(container.allState)(Question)
