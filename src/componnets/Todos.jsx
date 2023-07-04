import React, { useEffect, useState } from "react";

function Todos({ todosFromList }) {
  const [todos, setTodos] = useState([null]);

  useEffect(() => {
    const fetchTodos = async () => {
      if (todosFromList) {
        setTodos(todosFromList);
        return;
      }
    };

    return () => {
      fetchTodos();
    };
  }, []);

  return todos ? (
    <div className="todo-container">
      <div className="todo-title">{todos.title}</div>
      <div className="todo-description">{todos.description}</div>
    </div>
  ) : (
    <p>no todos</p>
  );
}

export default Todos;
