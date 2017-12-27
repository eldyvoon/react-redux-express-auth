import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AdminArea from './admin'
import Navbar from './navbar'
import UserArea from './user'
import AdDetail from './user/adDetail'
import AdApplied from './user/adApplied'

@connect(state=>state.user)
export default class Dashboard extends Component {

	render(){

		const isAdmin = this.props.role === 'admin'

		return(
			<div>
				<Navbar />
				<Container>
					{isAdmin && <AdminArea />}
					{!isAdmin && 
            <BrowserRouter>
              <Switch>
                <Route exact path='/dashboard' component={UserArea} />
                <Route exact path='/dashboard/ad/:id' component={AdDetail} />
                <Route exact path='/dashboard/ad/:id/applied' component={AdApplied} />
              </Switch>
            </BrowserRouter>
					}
				</Container>
			</div>
		)
	}
}