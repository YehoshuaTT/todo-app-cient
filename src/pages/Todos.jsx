import React, { useEffect, useState } from "react";
import { TodoService } from "../services/httpService";
import AddItem from "../componnets/AddItem";
import DeleteItem from "../componnets/DeleteItem";
import EditItem from "../componnets/EditItem";

function Todos({ todosFromList }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      if (todosFromList) {
        setTodos(todosFromList);
      } else {
        const fetchedTodos = await TodoService.index();
        setTodos(fetchedTodos);
      }
    };

    fetchTodos();
  }, [todosFromList]);

  return (
    <div className="todo">
      My Todos: <AddItem type={"todos"} setItem={setTodos} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-container">
            <div className="todo-title">{todo.title}</div>
            <div className="todo-description">{todo.description}</div>
            <DeleteItem type={"todos"} itemId={todo._id} setItem={setTodos} />
            <EditItem
              type={"todos"}
              itemId={todo._id}
              setItem={setTodos}
              text={{ title: todo.title, description: todo.description }}
            />
          </div>
        ))
      ) : (
        <p>no todos</p>
      )}
    </div>
  );
}

export default Todos;
