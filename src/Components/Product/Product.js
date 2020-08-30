
import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {title,Price,image} =props.coures;
    return (
        <div className= 'product'>
            <div>
                <img src={image} alt="" srcset=""/>
            </div>
            <div className="product-dis" >
              <h2>{title}</h2>
              <p>price: ${Price}</p>
              <button 
              onClick = {() =>props.handleAddCoure(props.coures)} 
              className= "button"
              > Enroll Now </button>
              
            </div>
        </div>
    );
};

export default Product;