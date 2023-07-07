import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { TodoService } from "../services/httpService";

function EditTodo({ itemId, setTodos, text }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState(text.title);
  const [description, setDescription] = useState(text.description);

  const EditFunction = async () => {
    if (title?.length > 0) {
      if (await TodoService.update(itemId, { title, description })) {
        setShowFields(!showFields);
        setTodos(await TodoService.index());
      }
    }
  };

  return (
    <>
      <IconButton
        aria-label="Edit"
        size="large"
        onClick={() => setShowFields(!showFields)}
      >
        <ModeEditOutlineOutlinedIcon fontSize="inherit" />
      </IconButton>

      {showFields && (
        <>
          <TextField
            required
            id="outlined-required"
            label="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={EditFunction}
          />
          <TextField
            id="outlined-required"
            label="description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={EditFunction}
          />
        </>
      )}
    </>
  );
}

export default EditTodo;
