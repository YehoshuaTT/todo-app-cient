import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { TodoService } from "../services/httpService";

function AddTodo({ setTodos }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const addFunction = async () => {
    if (title?.length > 0) {
      if (await TodoService.create({ title, description })) {
        setShowFields(!showFields);
        setTodos(await TodoService.index());
      }
    }
  };

  return (
    <>
      <IconButton
        aria-label="add"
        size="large"
        onClick={() => setShowFields(!showFields)}
      >
        <AddBoxOutlinedIcon fontSize="inherit" />
      </IconButton>
      {showFields && (
        <>
          <TextField
            required
            id="outlined-required"
            label="title"
            defaultValue=""
            onChange={(e) => setTitle(e.target.value)}
            onBlur={addFunction}
          />
          <TextField
            // required
            id="outlined-required"
            label="description"
            defaultValue=""
            onChange={(e) => setDescription(e.target.value)}
            onBlur={addFunction}
          />
        </>
      )}
    </>
  );
}

export default AddTodo;
