import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AdDetail from '../../../components/adDetail'

import { connect } from 'react-redux'
import { fetchAd, applyAd } from '../../../actions/adAction'

import { Redirect } from 'react-router-dom'

@connect(state=>state.ads,{fetchAd, applyAd})
class adDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	componentDidMount() {
		this.adId = this.props.match.params.id
		this.props.fetchAd(this.adId)
	}

	applyAd() {
		const userId = window.localStorage.getItem('userId')
		this.props.applyAd(this.adId, userId)
	}

	render() {

		const { ad, redirectTo } = this.props

		return(
			<Container>
			  {redirectTo && <Redirect to={redirectTo} />}
				{ad && <AdDetail 
					data={ad}
					applyAd={()=>this.applyAd()}
					openModal={()=>this.setState({isOpen: true})}
					closeModal={()=>this.setState({isOpen: false})}
					isOpen={this.state.isOpen} />}
			</Container>
		)
	}
}

export default adDetail