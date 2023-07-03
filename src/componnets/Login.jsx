import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import HttpService from "../services/httpService";
import { useNavigate } from "react-router-dom";

function Login({ authorized, setAuthorized }) {
  const navigate = useNavigate();

  if (authorized) navigate("/main");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState();

  let user = { email, password };

  const areAllFieldsFilled = () => {
    for (const field in user) {
      if (!user[field]) {
        return false;
      }
    }
    return true;
  };
  const logRegFunction = async () => {
    if (await HttpService.login("login", user)) {
      setAuthorized(true);
      navigate("/main");
    }
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
      <Button
        disabled={!areAllFieldsFilled()}
        onClick={() => logRegFunction()}
        variant="contained"
      >
        send
      </Button>

      <p>Not yet registerd?</p>
      <Button variant="contained" onClick={() => navigate("/login/register")}>
        Register
      </Button>
    </div>
  );
}

export default Login;
