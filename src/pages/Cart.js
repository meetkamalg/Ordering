import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
          <Link to="/checkout"><button>Checkout</button></Link>
        </>
      )}
    </div>
  );
}
