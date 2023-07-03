import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div>Main</div>
      <button onClick={() => navigate("/login")}>login</button>
    </>
  );
}

export default Main;
