import React, { createContext, useState } from "react";



export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const login = () => {
    setUser({
      name: "Ean",
      email: "...",
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({ name: "", email: "", isLoggedIn: false });
  };

  const updateProfile = (name, email) => {
    setUser((prev) => ({ ...prev, name, email }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}
