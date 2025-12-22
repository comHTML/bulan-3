import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product tidak ditemukan</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{product.title}</h2>
      <img src={product.image} width={200} />
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
