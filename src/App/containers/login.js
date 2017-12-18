import React from 'react'
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userAction'
import { Redirect } from 'react-router'

import './login.less'
import MessageBanner from '../components/messageBanner'

@connect(state=>({user: state.user, global: state.global}), {loginUser})
class LoginForm extends React.Component {

  handleSubmit() {
    const { email, password } = this.state
    this.props.loginUser(email, password)
  }

  render(){
    return(
      <div>
        {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo} />:''}
        <div className='signup-login-form'>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Login
              </Header>

              {this.props.user.msg && <MessageBanner content={this.props.user.msg} />}

              <Form loading={this.props.global.loading} size='large' onSubmit={()=>this.handleSubmit()}>
                <Segment stacked>
                  <Form.Input
                    onChange={e => this.setState({[e.target.name]: e.target.value})}
                    fluid
                    name='email'
                    icon='mail'
                    iconPosition='left'
                    placeholder='Email address'
                  />
                  <Form.Input
                    onChange={e => this.setState({[e.target.name]: e.target.value})}
                    fluid
                    name='password'
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
                  <Form.Button type='submit' color='teal' fluid size='large' content='Login' />
                </Segment>
              </Form>
              <Message>
                Not a member? <a onClick={()=>this.props.history.push('/signup')}>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default LoginForm

