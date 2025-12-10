function ItemList({ items }) {
  return (
    <div>
      <h2>Daftar Item</h2>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada item yang tersedia saat ini.</p>
      )}
    </div>
  );
}

export default ItemList;