import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    const exists = items.find(item => item.id === product.id);
    if (exists) {
      setItems(prev =>
        prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setItems(prev => [...prev, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
