import React from 'react'

import sorry from '../sorry.png'

const NotFound = () => {
	return (
		<div className='notfound'>
			<img src={sorry} alt="don't found" />
			<p>Sorry ☹ we can't find your movie!</p>
		</div>
	)
}

export default NotFound
