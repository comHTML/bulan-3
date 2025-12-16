import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const products = [
  { id: 1, name: "Buku", price: 10000 },
  { id: 2, name: "Pulpen", price: 5000 },
];

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <h3>Produk</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => addItem(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}
