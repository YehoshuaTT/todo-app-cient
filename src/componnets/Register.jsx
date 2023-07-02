import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import HttpService from "../services/httpService";
import { useNavigate } from "react-router-dom";

function Register({ setAuthorized }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState([]);
  const [password, SetPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [username, setUserName] = useState([]);

  let user = { email, password, firstName, lastName, username };

  const logRegFunction = async () => {
    if (HttpService.login("register", user)) setAuthorized(true);
  };

  return (
    <div>
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

      <div>
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
      <p>Alrady registerd? </p>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
    </div>
  );
}

export default Register;
