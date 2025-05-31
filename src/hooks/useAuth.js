import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");

  const login = async (user) => {
    const response = await fetch(`${API_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setIsLogin(data.isLogin);
    setToken(data.token);
    return data.isLogin;
  };

  const logout = () => {
    setIsLogin(false);
    setToken("");
  };

  return { isLogin, token, login, logout };
};

export default useAuth;
