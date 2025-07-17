import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
  <div className="cart-container">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <CartItem item={item} />
          </div>
        ))}
        <Link to="/checkout"><button>Checkout</button></Link>
      </>
    )}
  </div>
);
}
