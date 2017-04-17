import React from 'react'
import { Link } from 'react-router-dom'

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
      <button onClick={this.handleClick}>SUBMIT</button>
      </section>
    );
  }
}

export default Results
