import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import './login.css'

const SignupForm = () => (
  <div className='signup-login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Member Sign Up
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Full Name'
            />
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='Email address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password Again'
              type='password'
            />
            

            <Button color='teal' fluid size='large'>Sign Up</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default SignupForm

