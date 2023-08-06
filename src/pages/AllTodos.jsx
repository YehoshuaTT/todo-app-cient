import React, { useEffect, useState } from "react";
import { ListService, TodoService } from "../services/httpService";
import EditTodo from "../componnets/EditTodo";
import ToggleButton from "../componnets/ToggleButton";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const deletation = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    await TodoService.delete(itemId);
    setLists && setLists(await ListService.index());
    setTodos(await TodoService.index());
  };

  return (
    <div className="all-todos">
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
          <div key={todo._id} className="all-todo-container">
            <EditTodo
              itemId={todo._id}
              setLists={setLists}
              setTodos={setTodos}
              text={{ title: todo.title }}
            />
            <div className="all-todo-butttons">
              <ToggleButton todoId={todo._id} completed={todo.completed} />
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => deletation(todo._id)}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
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
