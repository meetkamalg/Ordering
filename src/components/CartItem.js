import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <span>{item.name} - ${item.price}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}
