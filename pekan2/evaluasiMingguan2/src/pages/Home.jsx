import { useEffect, useState, useContext } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import CartBadge from "../components/CartBadge";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { theme, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "all" ? true : p.category === category
    );

  return (
    <div className={`app ${theme}`}>
      <div className="header">
      <CartBadge />
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      </div>

      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter value={category} onChange={setCategory} />
      <ProductList products={filtered} loading={loading} error={error} />
    </div>
  );
}

export default Home;
