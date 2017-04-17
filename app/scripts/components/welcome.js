import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component{
  constructor(props){
    super(props);

    this.startClick = this.startClick.bind(this)
  }

startClick(){
  console.log('Start Clicked');
}

render () {
    return (
      <section>
        <h3>Answer these 10 questions for Better Productivity</h3>
        <button onClick={this.startClick}>START</button>

      </section>
    );
  }
}

export default Welcome;
