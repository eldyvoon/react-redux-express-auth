import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getUser } from '../actions/userAction'
import { connect } from 'react-redux'

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
		console.log(getUser)
		this.props.getUser()
			.then(res=> {
				this.props.history.push(this.props.redirectTo)
			})


		/*const userid = browserCookie.get('userid')

		if(userid){
			this.props.getUser()
				.then(res=> {
					this.props.history.push(this.props.redirectTo)
				})
		}else{
			this.props.history.replace('/login')
		}*/
		this.props.history.replace('/login')
	}

	render(){
		return <div></div>
	}
}

export default AuthRoute
