import React from 'react';
import data from '../../data/data.json';
import {useState} from 'react';
import './Enroll.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Enroll = () => {
    const first = data;
     const [coures, setCoures] = useState(first);
     const [cart, setCart] = useState([]);
 
      const handleAddCoure = (products) =>{
          
          const newCart =[...cart,products];
          setCart (newCart);
      }
    return (
        <div className = "Shop-container">
          <div className="product-container" >
            
            {
                coures.map(crs => <Product 
                    handleAddCoure ={handleAddCoure}
                    
                    coures={crs}></Product>)
            }

          </div>
          <div className=" cart-container">
        <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Enroll;