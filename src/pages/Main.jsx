import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      Navbar
      <nav>
        <br></br>
        <Link to={"/lists"}> My lists </Link>
        <Link to={"/todos"}> My Todos </Link>
        <Link to={"/categories"}>My categories </Link>
      </nav>
      <br></br>
    </div>
  );
}

export default Main;
