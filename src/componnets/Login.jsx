/*
React router

pages folder.
login page

home page



*/

import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState([]);
  const [password, SetPassword] = useState([]);
  const [firstName, setFirsName] = useState([]);
  const [toggelRegLogin, setToggelRegLogin] = useState(true);

  let user = { email: email, password: password };
  const alertIT = async () => {
    const { data } = await axios.post(`/auth/login`, user);
    setFirsName("hello " + data.user.firstName);
  };
  return (
    <div>
      <p>Login </p>
      <div>{firstName}</div>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="username"
        label="username"
        variant="standard"
      />
      <TextField
        onChange={(e) => SetPassword(e.target.value)}
        id="password"
        label="password"
        variant="standard"
        type="password"
      />
      <button onClick={() => alertIT()}>
        {toggelRegLogin ? "login" : "regiser"}
      </button>
      {toggelRegLogin && (
        <>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="username"
            label="username"
            variant="standard"
          />
          <TextField
            onChange={(e) => SetPassword(e.target.value)}
            id="password"
            label="password"
            variant="standard"
            type="password"
          />
          <button onClick={() => alertIT()}>send</button>
        </>
      )}
      <div>
        not registerd yet?
        <button onClick={() => setToggelRegLogin(!toggelRegLogin)}>
          register
        </button>
      </div>
    </div>
  );
}

export default Login;
