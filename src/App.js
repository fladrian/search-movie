import React, {useState} from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import Title from './components/Title'
import SearchForm from './components/SearchForm'

import MovieResults from './components/MovieResults'


import Loader from './components/Loader'

const App = () => {
  const [results, setResults] = useState([])
  const [loader, setLoader] = useState(false)
  const _handleResults = (results,isLoad) => {
  console.info(results)
  setResults(results)
  setLoader(isLoad)
  
 }


  return (
    <div className="App">
      <Title>Search Movie</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={_handleResults} />
        {
          (!Object.is(results,undefined) && results.length !== 0) 
          ? ''
          : <p>Search your favorites movies here...</p>
        }
      </div>
      {
          !loader 
          ? <MovieResults movies={results} loader={loader}/>
          : <Loader/>
      }
      
    </div>
  );
}

export default App;
