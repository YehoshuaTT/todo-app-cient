import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div>Main</div>
      <nav>
        <Link to={"/lists"}> My lists </Link>
        <Link to={"/todos"}> My Todos </Link>
        <Link to={"/main"}> Home </Link>
        <Link to={"/categories"}>My categories</Link>
      </nav>
      <button onClick={() => navigate("/login")}>login</button>
    </>
  );
}

export default Main;
