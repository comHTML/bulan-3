function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

export default LoginButton;