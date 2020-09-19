import React , { useEffect , useState } from 'react';
import axios from 'axios';
import Products from './Products';
import {
  useLocation,
} from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

function SearchResult() {

  const [ products , setProducts ] = useState( [] );
  const [ filters , setFilters ] = useState( [] );
  const location = useLocation();

  useEffect( () => {
    axios({
      method : 'GET',
      url : `https://api.mercadolibre.com/sites/MLA/search${ location.search }`,
      author : {
        name : 'Mateo',
        lastname : 'Herrera'
      }
    })
    .then( data => {
      setProducts( data.data.results )
      setFilters( data.data.filters )
    })
  } , [ location.search ] )

  return(
    <div>
      <BreadCrumb filters = { filters }></BreadCrumb>
      <div className = 'productsList'>
        <Products products = { products } ></Products>
      </div>
    </div>
  )
}

export default SearchResult;
