import useFetch from "../hooks/useFetch";

function Post() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
