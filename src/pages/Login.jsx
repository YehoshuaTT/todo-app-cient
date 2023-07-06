import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { HttpService } from "../services/httpService";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

function Login({ authorized, setAuthorized }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
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
      navigate("/");
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
        type="email"
        variant="standard"
        required
      />
      <TextField
        required
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
        type="submit"
        endIcon={<SendIcon />}
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
