import React from "react";

function Todos({ todo }) {
  return (
    <div className="todo-container">
      <div className="todo-title">{todo.title}</div>
      <div className="todo-discription">{todo.description}</div>;
    </div>
  );
}

export default Todos;
