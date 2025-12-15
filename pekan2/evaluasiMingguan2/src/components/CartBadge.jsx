import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartBadge() {
  const { state } = useContext(CartContext);

  return <strong>🛒 Cart: {state.count}</strong>;
}

export default CartBadge;
