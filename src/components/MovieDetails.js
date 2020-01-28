import React from 'react'
import ButtomToHome from './ButtomToHome'

const MovieDetails = ({ details }) => {
	const { Title, Poster, Production, Director, Plot, Actors, imdbRating } = details
	
	return (
		<div className='movie-details-container'>
			<ButtomToHome/>
			<h2 className='detail-title'>{Title}</h2>
			
			<div className='flex-detail'>
			<div className='movie-details-item'>
				<figure className='poster-movie'>
					<img src={Poster} alt={Title}></img>
				</figure>
				<small><b>Production:</b> {Production}</small>
				<p><b>Director:</b> {Director}</p>
			</div>
			<div className='movie-details-item'>
				<p><b>Sinopsis:</b> {Plot}</p>
				<p><b>Actors:</b> {Actors}</p>
				<p><b>Rating:</b> {imdbRating}</p>
			</div>
			</div>
		</div>
	)
}

export default MovieDetails
