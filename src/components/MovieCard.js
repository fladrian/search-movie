import React from 'react'
import 'bulma/css/bulma.css'
const MovieCard = ({ movie }) => {
	const { Title, Year, Poster } = movie
	return (
		<div className="card MovieList-item">
			<div className="card-image">
				<figure className="image">
					<img
						alt={Title}
						src={Poster}
					/>
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
	)
}
export default MovieCard