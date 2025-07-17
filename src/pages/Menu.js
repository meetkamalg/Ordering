import React from 'react';
import FoodItem from '../components/FoodItem';
import './Menu.css';

const sampleMenu = [
  { id: 1, name: 'Burger', price: 8.99 },
  { id: 2, name: 'Fries', price: 3.99 },
  { id: 3, name: 'Pizza Slice', price: 4.99 },
];

export default function Menu() {
  export default function Menu() {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
      {sampleMenu.map(item => (
        <div key={item.id} className="menu-item">
          <FoodItem item={item} />
        </div>
      ))}
    </div>
  );
}
  );
}
