function ProductList({ products }) {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} — Rp {item.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
