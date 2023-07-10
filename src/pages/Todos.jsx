import React, { useEffect, useState } from "react";
import { TodoService } from "../services/httpService";
import DeleteTodo from "../componnets/DeleteTodo";
import EditTodo from "../componnets/EditTodo";
import ToggleButton from "../componnets/ToggleButton";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

function Todos({ todosFromList, setLists }) {
  const [todos, setTodos] = useState([]);
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState();
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

  const addFunction = async () => {
    if (title?.length > 0) {
      if (await TodoService.create({ title })) {
        setShowFields(!showFields);
        setTodos(await TodoService.index());
      }
    }
  };
  return (
    <div className="todo">
      {!todosFromList && (
        <>
          <IconButton
            aria-label="add"
            size="large"
            onClick={() => setShowFields(!showFields)}
          >
            <AddBoxOutlinedIcon fontSize="inherit" />
          </IconButton>
          {showFields && (
            <TextField
              required
              id="outlined-required"
              label="title"
              defaultValue=""
              onChange={(e) => setTitle(e.target.value)}
              onBlur={addFunction}
              onClick={() => setShowFields(!showFields)}
            />
          )}
        </>
      )}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo._id} className="todo-container">
            <EditTodo
              itemId={todo._id}
              setLists={setLists}
              setTodos={setTodos}
              text={{ title: todo.title }}
            />
            <div className="todo-butttons">
              <ToggleButton todoId={todo._id} completed={todo.completed} />
              <DeleteTodo
                itemId={todo._id}
                setTodos={setTodos}
                setLists={setLists ? setLists : ""}
              />
            </div>
          </div>
        ))
      ) : (
        <p>no todos</p>
      )}
    </div>
  );
}

export default Todos;
