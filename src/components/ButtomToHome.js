import React from 'react'
import {Link} from 'react-router-dom'
import 'bulma/css/bulma.css'

const ButtomToHome = () => {
	return (
		<Link to={'/'}>
			<button className='bthome'>Home</button>
		</Link>
	)
}

export default ButtomToHome
