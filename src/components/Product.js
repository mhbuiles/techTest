import React from 'react';
import {
  Link
} from 'react-router-dom';
import './componentsCSS/Product.css';
import shipping from './assets/shipping.png'

function Product( { product } ) {
  return(
    <Link to = {`/SearchResult/ProductDetails/items/${ product.id }`}>
      <div className = 'contProduct'>
        <div className = 'contPic'>
          <img className = 'productPicture' src = { product.thumbnail } alt = ''/>
        </div>
        <div className = 'contInfo'>
          <p className = 'productPrice'>$ { Intl.NumberFormat( 'es' , { style : 'currency' , currency : 'ARS' }).format(parseFloat( product.price ) ) } { product.shipping.free_shipping && <img className = 'freeShipping' src = { shipping } alt = '' />}</p>
          <h3 className = 'productTitle'>{ product.title }</h3>
          <p className = 'productCondition'>
            { ( product.condition === 'new' ) ? 'Nuevo' : 'Usado' }
          </p>
        </div>
        <div className = 'productCity'>
          <p>{ product.address.city_name }</p>
        </div>
      </div>
    </Link>
  )
}

export default Product;
