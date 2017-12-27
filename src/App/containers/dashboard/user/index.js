import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Ad from '../../../components/ad'

import { connect } from 'react-redux'
import { fetchAds } from '../../../actions/adAction'

import { Card } from 'semantic-ui-react'

@connect(state=>state.ads,{fetchAds})
class User extends Component {

	componentDidMount() {
		this.props.fetchAds()
	}
	render() {

		const { ads } = this.props

		return(
			<Container>
				{ads.length > 1 && <Card.Group>
					{ads.map(data => <Ad key={data._id} data={data} />)}
					</Card.Group>
				}
			</Container>
		)
	}
}

export default User


