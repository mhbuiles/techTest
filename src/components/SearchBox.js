import React , { useState } from 'react';
import './componentsCSS/SearchBox.css';
import lupa from './assets/lupa.png';
import logo from './assets/logo.png';
import {
  Link,
} from 'react-router-dom';

function SearchBox() {

  const [ product , setProduct ] = useState('');

  return(
    <div className = 'containerSearchBox'>
      <form className = 'form'>
        <Link to = '/'><img className = 'formImage' src = { logo } alt = '' /></Link>
        <input className = 'formInput' placeholder = 'Nunca dejes de buscar' onChange = { ( event ) => setProduct( event.target.value ) } value = { product } ></input>
        <Link to = {`/SearchResult/items?q=${product}`}>
          <button onClick = { event => setProduct( '' ) } className = 'formButton' ><img src = { lupa } alt = '' /></button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBox;
