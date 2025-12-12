import { useEffect, useState } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Sedang mengambil data...</p>;

  return (
    <div style={{ padding: 20, background: "#fffbfbff", borderRadius: 8 }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>User ID: {post.userId}</small>
    </div>
  );
}

export default FetchPost;
