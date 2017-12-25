import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AdDetail from '../../../components/adDetail'

import { connect } from 'react-redux'
import { fetchAd } from '../../../actions/adAction'

import { Card } from 'semantic-ui-react'

@connect(state=>state.ads,{fetchAd})
class adDetail extends Component {

	componentDidMount() {
		const adId = this.props.match.params.id
		this.props.fetchAd(adId)
	}
	render() {

		const { ad } = this.props
		console.log(ad)

		return(
			<Container>
				<Card fluid>
		      <Card.Content>
		        <Card.Header content='Jake Smith' />
		        <Card.Meta content='Musicians' />
		        <Card.Description content='Jake is a drummer living in New York.' />
		      </Card.Content>
		    </Card>
			</Container>
		)
	}
}

export default adDetail