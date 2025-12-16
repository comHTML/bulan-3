import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartDisplay() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      {cart.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
      <p>Total: {totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
