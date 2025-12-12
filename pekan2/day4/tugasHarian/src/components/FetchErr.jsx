import { useEffect, useState } from "react";
import axios from "axios";

function FetchErr() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal mengambil data pengguna!");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Sedang mengambil data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: 20, background: "#dfdfdfff", borderRadius: 8 }}>
      <h2>Data Pengguna</h2>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telepon:</strong> {user.phone}</p>
    </div>
  );
}

export default FetchErr;
