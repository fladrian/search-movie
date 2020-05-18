import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom'
import loading from '../loading2.gif'

const MovieCard = ({ movie }) => {
	const { Title, Year, Poster, imdbID } = movie
	const [loader, setLoader] = useState(true)
	const _handleLoad = (e) => {
		console.info(e)
		setLoader(false)
	}

	return (
		<Link to={`/details/${imdbID}`}>
			<div className="card MovieList-item">
				<div className="card-image">
					<figure className="image" >
						<img style={loader ? {
							backgroundImage: `url(${loading})`,
							backgroundPosition: 'center center',
							backgroundSize: '350px',
							backgroundRepeat: 'no-repeat'
						}
							: { backgroundImage: `url(${Poster}` }}
							alt=''
							src={Poster}
							onChange={_handleLoad} />
					</figure>
				</div>
				<div className="movie-content">
					<div className="media">
						<div className="media-content">
							<p className='movie-title'>{Title}</p>
							<p className='movie-subtitle'>{Year}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
export default MovieCard