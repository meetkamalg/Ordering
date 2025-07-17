import React from 'react';
import FoodItem from '../components/FoodItem';

const sampleMenu = [
  { id: 1, name: 'Burger', price: 8.99 },
  { id: 2, name: 'Fries', price: 3.99 },
  { id: 3, name: 'Pizza Slice', price: 4.99 },
];

export default function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      {sampleMenu.map(item => (
        <FoodItem key={item.id} item={item} />
      ))}
    </div>
  );
}
