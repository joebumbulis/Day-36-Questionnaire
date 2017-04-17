import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Question_1 from './components/question_1.js'
import Contact from './components/contact.js'

const FooBar = () => (<div>Hi</div>)

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={AppRoot}/>
          <Route path="/foobar"  component={FooBar} />
          <Route exact path="/question_1" component={Question_1} />
          <Route path="/contact-us" component={Contact} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
