import React, { Component } from 'react'

import Login from './containers/login'
import Signup from './containers/signup'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import AuthRoute from './components/authRoute'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        	<BrowserRouter>
        		<Switch>
              <AuthRoute></AuthRoute>
        			<Route path='/login' component={Login} />
        			<Route path='/signup' component={Signup} />
        		</Switch>
        	</BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
