import React, { Component } from 'react'

import Login from './containers/login'
import Signup from './containers/signup'
import Dashboard from './containers/dashboard'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './utils/interceptors'
import store from './store'

import AuthRoute from './components/authRoute'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        	<BrowserRouter>
            <div>
              <AuthRoute></AuthRoute>
          		<Switch>
                <Route path='/dashboard' component={Dashboard} />
          			<Route path='/login' component={Login} />
          			<Route path='/signup' component={Signup} />
          		</Switch>
            </div>
        	</BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
