import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageBanner = props => (
  <Message error>
    <Message.Header>{props.content}</Message.Header>
    <p>{props.desc}</p>
  </Message>
)

export default MessageBanner