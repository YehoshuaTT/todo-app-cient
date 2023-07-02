/*
React router

pages folder.
login page

home page



*/

import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Login({ setAuthorized }) {
  const [email, setEmail] = useState([]);
  const [password, SetPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [username, setUserName] = useState([]);

  const [registerOrLogin, setRegisterOrLogin] = useState(null);

  let user = { email, password, firstName, lastName, username };
  const logRegFunction = async () => {
    // if (registerOrLogin === "register") {
    const data = await axios.post(`auth/${registerOrLogin}/`, user);
    console.log(data);
    // }
    // const response = await axios.post(`/auth/login/`, {
    //   email,
    //   password,
    // });
    // console.log(response);
    setAuthorized(true);
  };
  return (
    <div>
      <div>
        <h1 id="title">Todo App</h1>
        <Button variant="contained" onClick={() => setRegisterOrLogin("login")}>
          Login
        </Button>
        <Button
          variant="contained"
          onClick={() => setRegisterOrLogin("register")}
        >
          Register
        </Button>
      </div>

      <div>{firstName}</div>

      {registerOrLogin && (
        <>
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
        </>
      )}
      {registerOrLogin === "register" && (
        <div className="registerFields">
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            id="firstname"
            label="Firs name"
            variant="standard"
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            id="lastname"
            label="Last name"
            variant="standard"
            type="text"
          />
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            label="Username"
            variant="standard"
          />
        </div>
      )}
      {registerOrLogin && (
        <Button onClick={() => logRegFunction()} variant="contained">
          send
        </Button>
      )}
    </div>
  );
}

export default Login;
