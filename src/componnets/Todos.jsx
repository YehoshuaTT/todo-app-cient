import React, { useEffect, useState } from "react";
import { TodoService } from "../services/httpService";

function Todos({ todosFromList }) {
  const [todos, setTodos] = useState([null]);

  useEffect(() => {
    const fetchTodos = async () => {
      if (todosFromList) {
        setTodos(todosFromList);
        return;
      } else setTodos(await TodoService.index());
    };

    return () => {
      fetchTodos();
    };
  }, []);

  return todos ? (
    <div key={todos.id} className="todo-container">
      <div className="todo-title">{todos.title}</div>
      <div className="todo-description">{todos.description}</div>
    </div>
  ) : (
    <p>no todos</p>
  );
}

export default Todos;
