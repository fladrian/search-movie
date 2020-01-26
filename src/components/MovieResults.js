import React from 'react'
import MovieList from './MovieList'
import NotFound from './NotFound'

const MovieResults = ({ movies, loader }) => {
	return (
		<div className="movie-flex">
			{
          (movies === undefined )
          ? <NotFound />
          : <MovieList movies={movies} loader={loader} />
        }
			
		</div>
	)
}

export default MovieResults
