import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { fetchAd, submitAd } from '../../../actions/adAction'

import { Button } from 'semantic-ui-react'

import RichEditor from '../../../components/richEditor'
import { AdDetailBody } from '../../../components/adDetail'

import { Redirect } from 'react-router-dom'

@connect(state=>state.ads,{fetchAd, submitAd})
class adDetail extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      body: ''
    }
  }

  componentDidMount() {
    this.adId = this.props.match.params.id
    this.props.fetchAd(this.adId)
  }

  handleModelChange(body) {
    this.setState({
      body: body
    })
  }

  submitAd() {
    const userId = window.localStorage.getItem('userId')
    this.props.submitAd(this.adId, userId, this.state.body)
  }

  render() {

    const { ad, redirectTo } = this.props

    return(
      <Container>
        {redirectTo && <Redirect to={redirectTo} />}
        {ad && <AdDetailBody data={ad} />}
        <br />
        <RichEditor
          body={this.state.body}
          modelChange={e =>this.handleModelChange(e)}
          height={300}
        />
        <br />
        <center>
          <Button disabled={!this.state.body} primary onClick={()=>this.submitAd()}>Submit Task</Button>
        </center>
      </Container>
    )
  }
}

export default adDetail