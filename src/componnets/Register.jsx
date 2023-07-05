import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { HttpService } from "../services/httpService";
import { useNavigate } from "react-router-dom";

function Register({ authorized, setAuthorized }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);
  const [password, SetPassword] = useState(undefined);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [username, setUserName] = useState(undefined);

  let user = { email, password, firstName, lastName, username };

  const areAllFieldsFilled = () => {
    for (const field in user) {
      if (!user[field]) {
        return false;
      }
    }
    return true;
  };

  const logRegFunction = async () => {
    if (await HttpService.login("register", user)) {
      setAuthorized(true);
      navigate("/main");
    }
  };

  return (
    <div>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="Email"
        variant="standard"
        required
        type="email"
      />
      <TextField
        onChange={(e) => SetPassword(e.target.value)}
        id="password"
        label="password"
        variant="standard"
        type="password"
        required
      />
      <Button
        onClick={() => logRegFunction()}
        variant="contained"
        type="submit"
        disabled={!areAllFieldsFilled()}
      >
        send
      </Button>

      <div>
        <TextField
          onChange={(e) => setFirstName(e.target.value)}
          id="firstname"
          label="Firs name"
          variant="standard"
          required
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          id="lastname"
          required
          label="Last name"
          variant="standard"
          type="text"
        />
        <TextField
          required
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
