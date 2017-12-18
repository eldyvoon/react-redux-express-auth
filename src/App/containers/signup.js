import React from 'react'
import { Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { signupUser } from '../actions/userAction'

import './login.less'
import MessageBanner from '../components/messageBanner'

@connect(state=>({user: state.user, global: state.global}), {signupUser})
class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      password: '',
      passwordAgain: ''
    }
  }

  handleChange(e) {
    const key = e.target.name
    this.setState({[key]: e.target.value})
  }

  handleSubmit() {
    this.props.signupUser(this.state)
  }

  render(){
    return(
      <div>
        {this.props.user.redirectTo&&this.props.user.redirectTo!=='/login'?<Redirect to={this.props.user.redirectTo} />:''}
        <div className='signup-login-form'>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Sign Up
              </Header>

              {this.props.user.msg && <MessageBanner content={this.props.user.msg} />}

              <Form loading={this.props.global.loading} size='large' onSubmit={()=>this.handleSubmit()}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Full Name'
                    name='fullName'
                    onChange={e =>this.handleChange(e)}
                  />
                  <Form.Input
                    fluid
                    icon='mail'
                    iconPosition='left'
                    placeholder='Email address'
                    name='email'
                    onChange={e =>this.handleChange(e)}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={e =>this.handleChange(e)}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password Again'
                    type='password'
                    name='passwordAgain'
                    onChange={e =>this.handleChange(e)}
                  />
                  <Form.Button type='submit' color='teal' fluid size='large' content='Sign Up' />
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default SignupForm

