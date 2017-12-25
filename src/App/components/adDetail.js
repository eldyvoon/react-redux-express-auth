import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const AdDetail = ({data}) => (
    <Card
      header={data.title}
      meta={data.category}
      extra={
        <div className='extra'>
          
        </div>
      }
    />
)

export default AdDetail