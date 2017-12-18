import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import './index.less'
import Logout from '../../../components/logout'

import { logout } from '../../../actions/userAction'

@connect(state=>state.user, {logout})
export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout(){
    return <Logout redirectUrl={this.props.redirectTo} logout={this.props.logout} />
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu id='main-menu' inverted size='large'>
        <Menu.Item name='logo' active={activeItem === 'logo'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item content={
            <Logout redirectUrl={this.props.redirectTo} logout={this.props.logout} />
          } />
        </Menu.Menu>
      </Menu>
    )
  }
}