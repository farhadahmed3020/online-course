import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
     
    const total = cart.reduce((total,prd)=> total + prd.Price ,0);
    return (
        <div className= "cart-style">
            <h2>Order Summary</h2>
            <p>Courses Enroll: {cart.length}</p>
            <p> Total Price:{total}</p>
            <button className= "cart-button"> Sign Up</button>
        </div>
    );
};

export default Cart;