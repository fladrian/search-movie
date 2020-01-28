import React, { useState } from 'react'
import axios from 'axios'


import SearchFormContent from './SearchFormContent'


const SearchForm = ({onResults}) => {

	const api_key = '69bd254f'
	const [inputMovies, setInputMovies] = useState({})

	const _handleChange = (e) => {
		const { name, value } = e.target
		setInputMovies({
			[name]: value
		})
	}
	const _handleSubmit = async (e) => {
		e.preventDefault()
		const { searchMovie } = inputMovies
		onResults([],true)
		const {data:{Search}}  = await axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${searchMovie}`)
		
		Search === undefined
		?	onResults(Search,false,false)
		:	onResults(Search,false,false)
	}

	return (
			<SearchFormContent onSubmit={_handleSubmit}
												 onChange={_handleChange} />
	)
}

export default SearchForm