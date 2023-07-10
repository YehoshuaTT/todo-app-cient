import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ListService, TodoService } from "../services/httpService";

function EditTodo({ itemId, setTodos, text, setLists }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState(text.title);

  const EditFunction = async () => {
    if (title?.length > 0) {
      if (await TodoService.update(itemId, { title })) {
        setShowFields(!showFields);
        setLists(await ListService.index());
        setTodos(await TodoService.index());
      }
    }
  };

  return (
    <div className="todo-title" onBlur={EditFunction}>
      {!showFields ? (
        <h3 onClick={() => setShowFields(!showFields)}>{text.title}</h3>
      ) : (
        <>
          <TextField
            required
            multiline
            id="outlined-required"
            label="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </>
      )}
    </div>
  );
}

export default EditTodo;
