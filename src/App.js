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
  const [initMsg,setInitMsg] = useState(true)
  const _handleResults = (results,isLoad,msg) => {
  console.info(results)
  setResults(results)
  setLoader(isLoad)
  setInitMsg(msg)
  
 }


  return (
    <div className="App">
      <Title>Search Movie</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={_handleResults} />
        {
          initMsg && <p>Search your favorites movies here...</p>
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
