import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const login = (user) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userInfo", JSON.stringify(user));
    setIsAuthenticated(true);
    setUserInfo(user);
  };

  const logout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  // 로컬 스토리지에서 상태를 초기화
  useEffect(() => {
    const storedIsAuthenticated =
      localStorage.getItem("isAuthenticated") === "true";
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (storedIsAuthenticated) {
      setIsAuthenticated(true);
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
