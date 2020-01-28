import React,{useState, useEffect} from 'react'
import axios from 'axios'
import MovieDetails from '../components/MovieDetails'
import Loader from '../components/Loader'

const Details = (props) => {
	 const [data, setData] = useState({})
	 const [loader, setLoader] = useState(false)
	 const {match:{params:{id}}} = props

	useEffect(() => {
		const getDetails = async () => {
			const api_key = '69bd254f'
			setLoader(true)
			const {data}	= await axios
														.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`)
			setData(data)
			setLoader(false)
		}
		getDetails()
		return () => {
			getDetails()
		}
	}, [id])
	return (
		loader
		? <Loader />
		: <MovieDetails id='movie-details'
										details={data}/>
	)
}

export default Details
