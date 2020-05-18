import React from 'react'
import 'bulma/css/bulma.css'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
