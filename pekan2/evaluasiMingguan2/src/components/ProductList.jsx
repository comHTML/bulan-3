import ProductCard from "./ProductCard";

function ProductList({ products, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Gagal memuat data</p>;
  if (products.length === 0) return <p>Produk tidak ditemukan</p>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
