import { useEffect, useState } from "react";
import axios from "axios";

function FetchUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Sedang mengambil data pengguna...</p>;

  return (
    <div style={{ padding: 20, background: "#eaeaea", borderRadius: 8 }}>
      <h2>Data Pengguna</h2>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telepon:</strong> {user.phone}</p>
    </div>
  );
}

export default FetchUser;
