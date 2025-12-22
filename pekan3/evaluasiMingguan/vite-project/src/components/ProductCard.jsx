
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} width={100} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <Link to={`/products/${product.id}`}>Detail</Link>
    </div>
  );
};

export default ProductCard;
