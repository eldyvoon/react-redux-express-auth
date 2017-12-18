import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getUser } from '../actions/userAction'
import { connect } from 'react-redux'

import jwtDecode from 'jwt-decode'

@withRouter
@connect(state=>state.user,
	{getUser}
)
class AuthRoute extends Component {
	componentDidMount() {

		const publicList = ['/login', '/signup']
		const { pathname } = this.props.location

		//if user hit login or register route, skip
		if(publicList.indexOf(pathname)>-1){
			return false
		}

		const user = window.localStorage.getItem('token')
		const userId = user && jwtDecode(user)._id

		if(user){
			this.props.getUser(userId)
				.then(res=> {
					this.props.history.push('/dashboard')
				})
		}else{
			this.props.history.replace('/login')
		}
	}

	render(){
		return <div></div>
	}
}

export default AuthRoute
