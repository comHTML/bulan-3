function CategoryFilter({ value, onChange }) {
  return (
    <select className="filter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: 8, marginBottom: 20 }}
    >
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  );
}

export default CategoryFilter;
