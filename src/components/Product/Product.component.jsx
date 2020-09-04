import React from 'react'
import './Product.styles.css';

import StarIcon from '@material-ui/icons/Star'; // full start
import StarHalfIcon from '@material-ui/icons/StarHalf'; // half start

function Product({ id , title , image , price , rating }) {
  return (
    <div className="product">

           {/* Product info  */}
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
              {
                Array(rating).fill()
                .map( (_) => (
                    <StarIcon className="checked" />
                ) )
              }
          </div>
        </div>

          {/* product image */}
        <img src={image} alt="product-image" />
           {/* product botton  */}
        <botton>Add to Basket</botton>
    </div>  
  )
}

export default Product