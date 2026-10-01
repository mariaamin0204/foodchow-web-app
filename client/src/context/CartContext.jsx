import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateCartTotals } from '../utils/helpers';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('foodchow_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    localStorage.setItem('foodchow_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (foodItem, quantity = 1) => {
    setCartItems(prevItems => {
      const existingIdx = prevItems.findIndex(item => item.id === foodItem.id);
      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prevItems, { ...foodItem, quantity }];
    });
  };

  const removeFromCart = (foodId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== foodId));
  };

  const updateQuantity = (foodId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(foodId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item => item.id === foodId ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
  };

  const totals = calculateCartTotals(cartItems, coupon ? coupon.discountPercent : 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    coupon,
    setCoupon,
    totals,
    totalItemsCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};