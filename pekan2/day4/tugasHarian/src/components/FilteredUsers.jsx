import { useEffect, useState } from "react";

function FilteredUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Manipulasi data di sini

        const filtered = data
          .filter(user => user.id <= 5)   // hanya 5 user pertama
          .map(user => ({
            // hanya ambil nama & email
            name: user.name,
            email: user.email
          }));

        setUsers(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal fetch:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Mengambil data...</p>;

  return (
    <div style={{ 
        padding: 20, 
      background : "#b5b5b5ff",
      borderRadius: 8 

    }}>
      <h2>Daftar User (Hanya 5 Pertama)</h2>

      {users.map((u, i) => (
        <div
          key={i}
          style={{
            padding: 20,
            marginBottom: 8,
            background: "#b5b5b5ff",
            borderRadius: 8
          }}
        >
          <p><strong>Nama:</strong> {u.name}</p>
          <p><strong>Email:</strong> {u.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FilteredUsers;
