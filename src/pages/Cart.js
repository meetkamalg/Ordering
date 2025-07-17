import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cart, decreaseQuantity } = useContext(CartContext);

  const groupedItems = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += item.quantity || 1;
    } else {
      acc[item.id] = { ...item, quantity: item.quantity || 1 };
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupedItems);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {uniqueItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {uniqueItems.map(item => (
            <div key={item.id} className="cart-item">
              <CartItem item={item} />
              <span className="quantity-badge">Qty: {item.quantity}</span>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          ))}
          <Link to="/checkout"><button>Checkout</button></Link>
        </>
      )}
    </div>
  );
}