function Card({ children }) {
    return (
    <div style={{
        border: "2px solid #444",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "15px",
        backgroundColor: "#f9f9f9"
        }}>
     {children}
    </div>
);
}

export default Card;