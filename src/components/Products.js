import React from 'react';
import Product from './Product';

function Products( { products } ) {
  return(
    <div>
      { products.map( product =>
        <Product key = { product.id } product = { product } />
      ).slice( 0 , 4 )}
    </div>
  );
}

export default Products;
