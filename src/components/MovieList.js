import React from 'react'
import MovieCard from './MovieCard'
import '../App.css';

const MovieList = ({ movies }) => {
	return (
		movies.map((movie,index) => {
			return (
				<div
					key={index}
					className='MovieList'>
				
					<MovieCard movie={movie} />
				</div>
			)
		})
	)
}
export default MovieList