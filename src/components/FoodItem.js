import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function FoodItem({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-item">
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}
