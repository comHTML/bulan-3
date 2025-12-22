import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { logout } = useContext(AuthContext);
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Checkout berhasil 🎉");
    logout();
    navigate("/products");
  };

  return (
    <div>
      <h2>Checkout</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - ${item.price}
        </div>
      ))}

      <h3>Total: ${totalPrice}</h3>

      <button onClick={handleCheckout}>
        Bayar & Logout
      </button>
    </div>
  );
};

export default Checkout;
