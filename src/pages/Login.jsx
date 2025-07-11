import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Missing data");
      return;
    }
    const isLogged = await login({ username, password });
    if (isLogged) {
      setUsername("");
      setPassword("");
      navigate("/home");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={onsubmit}>
      <Box
        margin={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
        gap={"10px"}
      >
        <h1>Login</h1>
        <TextField
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type={"password"}
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type={"submit"} variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
