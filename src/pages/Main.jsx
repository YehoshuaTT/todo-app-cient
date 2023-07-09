import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Link to={"/lists"} className="main-link">
        My lists
      </Link>
      <Link to={"/todos"} className="main-link">
        My Todos
      </Link>
      <Link to={"/categories"} className="main-link">
        My categories
      </Link>
    </div>
  );
}

export default Main;
