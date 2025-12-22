import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart kosong</h2>
        <Link to="/products">Belanja dulu</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span> - ${item.price}
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${totalPrice}</h3>

      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
