import React from 'react'
import { Card, Button, Label, Confirm } from 'semantic-ui-react'
import './ad.less'

export const AdDetailBody = ({data}) => (
    <Card
      fluid
      className='ad'
      header={data.title}
      meta={
      	<div className='meta'>
      		<Label>{data.category}</Label>
      		<Label>{data.language}</Label>
      		<p>{data.requirements}</p>
        </div>
      }
      extra={
        <div className='extra'>
          <div className='extra'>
            <p className='left'>{`RM ${data.reward}`}</p>
            <p className='right'>{data.expiry_date && `Expiry date: ${data.expiry_date}`}</p>
          </div>
        </div>
      }
    />
)

export const AdApplyBody = ({openModal, closeModal, isOpen, applyAd}) => (
	<div>
	<center>
		<Button onClick={openModal} primary>Take this job</Button>
	</center>

  <Confirm
    open={isOpen}
    header={'Confirm'}
    content={'I have read the requirements and able to deliver the task.'}
    onCancel={closeModal}
    onConfirm={applyAd}
  />
	</div>
)

const AdDetail = ({data, openModal, closeModal, isOpen, applyAd}) => (
	<div>
	    <AdDetailBody data={data} />
	    <br />
	    <AdApplyBody 
	    	openModal={openModal}
	    	closeModal={closeModal}
	    	isOpen={isOpen}
	    	applyAd={applyAd}
	    />
  </div>
)

export default AdDetail