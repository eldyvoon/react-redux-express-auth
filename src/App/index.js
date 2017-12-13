import React, { Component } from 'react'

import Login from './component/login'
import Signup from './component/signup'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BrowserRouter>
      		<Switch>
      			<Route path='/login' component={Login} />
      			<Route path='/signup' component={Signup} />
      		</Switch>
      	</BrowserRouter>
      </div>
    )
  }
}

export default App
