function ProductCard({ productName, price, stock, isAvailable }) {
    return (
    <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
        width: "250px"
     }}>
        <h3>{productName}</h3>
        <p>Harga: Rp {price}</p>
        <p>Stok: {stock}</p>
        <p>Status: {isAvailable ? "Tersedia" : "Tidak Tersedia"}</p>
    </div>
);
}


ProductCard.defaultProps = {
stock: "Tidak diketahui",
isAvailable: false,
};

export default ProductCard;