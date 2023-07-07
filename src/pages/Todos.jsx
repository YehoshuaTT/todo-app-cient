import React, { useEffect, useState } from "react";
import { TodoService } from "../services/httpService";
import AddTodo from "../componnets/AddTodo";
import DeleteTodo from "../componnets/DeleteTodo";
import EditTodo from "../componnets/EditTodo";

function Todos({ todosFromList, setLists }) {
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
      {!todosFromList && (
        <>
          "My Todos:" <AddTodo setTodos={setTodos} />
        </>
      )}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-container">
            <div className="todo-title">{todo.title}</div>
            <div className="todo-description">{todo.description}</div>
            <DeleteTodo
              itemId={todo._id}
              setTodos={setTodos}
              setLists={setLists}
            />
            <EditTodo
              itemId={todo._id}
              setLists={setLists}
              setTodos={setTodos}
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
