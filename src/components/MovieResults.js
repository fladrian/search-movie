import React from 'react'
import MovieList from './MovieList'
import NotFound from './NotFound'

const MovieResults = ({ movies }) => {
	return (
		<div className="movie-flex">
			{
          (movies === undefined )
          ? <NotFound />
          : <MovieList movies={movies}/>
        }
			
		</div>
	)
}

export default MovieResults
