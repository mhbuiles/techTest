import React , { useState , useEffect } from 'react';
import './componentsCSS/ProductDetails.css';
import {
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import BreadCrumb from './BreadCrumb';

const BuyButton = styled.button`
   width: 180px;
   border-radius: 5px;
   border: none;
   padding: 8px 8px;
   margin: 16px 32px 32px 0px;
   background-color: #3483FA;
   color: #fff;
   cursor: pointer;
 `

function ProductDetails( ) {

  const [ product , setProduct ] = useState( {} );
  const [ description , setDescription ] = useState( '' );
  let { id } = useParams();

  useEffect( () => {
    axios({
      method : 'GET',
      url : `https://api.mercadolibre.com/items/${ id }`,
      author : {
        name : 'Mateo',
        lastname : 'Herrera'
      }
    })
    .then( data => {
      setProduct( data.data )
    })
    .catch( function (error) {
        console.log(error);
      });
    axios({
      method : 'GET',
      url : `https://api.mercadolibre.com/items/${ id }/description`,
      author : {
        name : 'Mateo',
        lastname : 'Herrera'
      }
    })
    .then( data => {
      setDescription( data.data.plain_text )
    })
    .catch( function (error) {
        console.log(error);
    })
  } , [id] )

  return(
    <div>
      <div className = 'productDetailsContainer'>
        <div className = 'productDetailsSmallCont'>
          <img className = 'productDetailsPicture' src = { product.thumbnail } alt = ''/>
          <div className = 'productDetailsInfo'>
            <p className = 'productDetailsCondition_sold'>
              { ( product.condition === 'new' ) ? 'Nuevo - ' : 'Usado - ' }
              { product.sold_quantity } vendidos
            </p>
            <h2 className = 'productDetailsTitle'>{ product.title }</h2>
            <p className = 'productDetailsPrice'>$ { product.price ? Intl.NumberFormat( 'es' , { style : 'currency' , currency : 'ARS' } ).format(parseFloat( product.price ) ) : 'Cargando...' }</p>
            <BuyButton>Comprar</BuyButton>
          </div>
        </div>
        <div className = 'productDetailsDescription'>
            <h3 className = 'productDetailsDescHeading'>Descripción del producto</h3>
            <p className = 'productDetailsDestext'>{ description }</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
