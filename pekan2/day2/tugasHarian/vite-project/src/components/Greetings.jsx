function Greetings({ isLoggedIn }) {
  return (
    <h2>
      {isLoggedIn ? "Halo, pengguna!" : "Silakan masuk terlebih dahulu."}
    </h2>
  );
}
export default Greetings;