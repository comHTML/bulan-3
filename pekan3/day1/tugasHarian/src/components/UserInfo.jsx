import React from "react";
import { useUserContext } from "../hooks/useUserContext";

function UserInfo() {
  const { user, login, logout } = useUserContext();

  return (
    <div>
      <h3>User Info</h3>
      {user.isLoggedIn ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default UserInfo;
