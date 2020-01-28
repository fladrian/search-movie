import React from 'react'
import ButtomToHome from '../components/ButtomToHome'



const Error404 = () => {
	return (
		<div>
			<h1 className='title'>404!<span role='img' aria-label='img'>⚠</span></h1>
			<h2 className='subtitle'>Page Not Found</h2>
			<ButtomToHome/>
		</div>
	)
}

export default Error404
