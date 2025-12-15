function SearchBar({ value, onChange }) {
  return (
    <input className="search"
      placeholder="Cari produk..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: 8, width: "100%", marginBottom: 10 }}
    />
  );
}

export default SearchBar;
