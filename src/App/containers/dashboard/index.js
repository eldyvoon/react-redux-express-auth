import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserArea from './user'
import AdminArea from './admin'
import Navbar from './navbar'
import { Container } from 'semantic-ui-react'

@connect(state=>state.user)
export default class Dashboard extends Component {

	render(){

		const isAdmin = this.props.role === 'admin'

		return(
			<div>
				<Navbar />
				<Container>
					{isAdmin && <AdminArea />}
					{!isAdmin && <UserArea />}
				</Container>
			</div>
		)
	}
}