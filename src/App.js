import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path = '/' component = {SearchBox}></Route>
        <Switch>
          <Route exact path = '/SearchResult/items' component = {SearchResult}></Route>
          <Route exact path = '/SearchResult/ProductDetails/items/:id' component = {ProductDetails}></Route>
          <Redirect from = '*' to = '/'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
