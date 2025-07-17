import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cart } = useContext(CartContext);

  // Group cart items by id and sum their quantities
  const groupedItems = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += item.quantity || 1;  // assuming item.quantity or default 1
    } else {
      acc[item.id] = { ...item, quantity: item.quantity || 1 };
    }
    return acc;
  }, {});

  // Convert grouped items object back to array
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
              {/* Pass the item with the grouped quantity */}
              <CartItem item={item} />
              {/* Show quantity badge */}
              <span className="quantity-badge">Qty: {item.quantity}</span>
            </div>
          ))}
          <Link to="/checkout"><button>Checkout</button></Link>
        </>
      )}
    </div>
  );
}