import { createContext, useState, useMemo, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};