import React from 'react'
import { Redirect } from 'react-router'

const Logout = ({logout, redirectUrl}) => {
	return(
		<div>
			{redirectUrl && <Redirect to={redirectUrl} />}
			<a style={{color: '#fff'}} onClick={e=>{e.preventDefault();logout()}}>Logout</a>
		</div>
	)
}

export default Logout