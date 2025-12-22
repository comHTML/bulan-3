
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
