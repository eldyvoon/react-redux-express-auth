import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Label } from 'semantic-ui-react'
import './ad.less'

const Ad = ({data}) => (
    <Card as={Link} to={`/dashboard/ad/${data._id}`} className='ad'
      header={data.title}
      meta={
        <div className='meta'>
          <Label>{data.category}</Label>
          <Label>{data.language}</Label>
        </div>
      }
      extra={
        <div className='extra'>
          <p className='left'>{`RM ${data.reward}`}</p>
          <p className='right'>{data.expiry_date && `Expiry date: ${data.expiry_date}`}</p>
        </div>
      }
    />
)

export default Ad