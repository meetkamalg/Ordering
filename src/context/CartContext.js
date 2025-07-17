import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        // Increase quantity if already in cart
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      } else {
        // Add new item with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCart(prev => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if ((item.quantity || 1) > 1) {
            // Reduce quantity by 1
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // If quantity === 1, do not add it (remove completely)
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};