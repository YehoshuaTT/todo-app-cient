/*
React router

pages folder.
login page

home page



*/

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import HttpService from "../services/httpService";
import { useNavigate } from "react-router-dom";

function Login({ setAuthorized }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState([]);
  const [password, SetPassword] = useState([]);

  let user = { email, password };

  const logRegFunction = async () => {
    if (HttpService.login("login", user)) setAuthorized(true);
  };

  return (
    <div>
      <div>
        <h1 id="title">Todo App</h1>
      </div>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="Email"
        variant="standard"
      />
      <TextField
        onChange={(e) => SetPassword(e.target.value)}
        id="password"
        label="password"
        variant="standard"
        type="password"
      />
      <Button onClick={() => logRegFunction()} variant="contained">
        send
      </Button>

      <p>Not yet registerd?</p>
      <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
}

export default Login;
