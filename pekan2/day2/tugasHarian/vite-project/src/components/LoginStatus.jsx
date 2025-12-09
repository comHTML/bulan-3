function LoginStatus({ isLoggedIn }) {
  let message;

  if (isLoggedIn) {
    message = "Anda sudah login. Selamat datang!";
  } else {
    message = "Anda belum login. Silakan login dulu.";
  }

  return <h2>{message}</h2>;
}

export default LoginStatus;
