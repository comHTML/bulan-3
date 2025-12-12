import { useEffect, useState } from "react";

function FetchPostWithAbort() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();       // buat controller
    const signal = controller.signal;               // ambil signal

    fetch("https://jsonplaceholder.typicode.com/posts/4", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan");
          return; // jangan set error karena ini bukan error sungguhan
        }
        setError("Terjadi kesalahan dalam mengambil data");
        setLoading(false);
      });

    // cleanup: batalkan request ketika komponen unmount
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Mengambil data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20, background: "#c8c8c8ff", borderRadius: 8 }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default FetchPostWithAbort;
