import React, { useState } from 'react'
import axios from 'axios'


import FormSearch from './FormSearch'


const SearchForm = ({onResults}) => {

	const api_key = '69bd254f'
	const [inputMovies, setInputMovies] = useState({})

	const _handleChange = (e) => {
		const { name, value } = e.target
		console.info(name, value)
		setInputMovies({
			[name]: value
		})
	}
	const _handleSubmit = async (e) => {
		e.preventDefault()
		const { searchMovie } = inputMovies
		onResults([],true)
		const {data:{Search}}  = await axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${searchMovie}`)
		if(Search === undefined){
			onResults(Search,false)
		 }else(
			onResults(Search,false)
		 )
	}

	return (
		<div>
			<FormSearch onSubmit={_handleSubmit}
									onChange={_handleChange} />
		</div>
	)
}

export default SearchForm