import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();

    // redirect ke halaman sebelumnya (checkout)
    const redirectTo = location.state?.from || "/checkout";
    navigate(redirectTo);
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Simulasi login (tanpa backend)</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
