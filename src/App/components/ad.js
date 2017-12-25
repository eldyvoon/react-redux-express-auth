import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './ad.less'

const Ad = ({data}) => (
    <Card className='ad'
      href={`ad/${data._id}`}
      header={data.title}
      meta={data.category}
      extra={
        <div className='extra'>
          <p className='left'>{`RM ${data.reward}`}</p>
          <p className='right'>{data.expiry_date && `Expiry date: ${data.expiry_date}`}</p>
        </div>
      }
    />
)

export default Ad