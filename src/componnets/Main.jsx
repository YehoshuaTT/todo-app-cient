import React from "react";
import { useNavigate } from "react-router-dom";
import Lists from "./Lists";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div>Main</div>
      <Lists />
      <button onClick={() => navigate("/login")}>login</button>
    </>
  );
}

export default Main;
