import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { ListService } from "../services/httpService";

function AddATodoToList({ setLists, listId }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState();

  const addFunction = async () => {
    if (title?.length > 0) {
      if (await ListService.addTodo(listId, { title })) {
        setShowFields(!showFields);
        setLists(await ListService.index());
        setTitle("");
      }
    } else setShowFields(!showFields);
  };

  return (
    <div
      className="add-todo-to-list"
      onBlur={addFunction}
      onClick={() => setShowFields(!showFields)}
    >
      <IconButton aria-label="add" size="large">
        <AddBoxOutlinedIcon fontSize="inherit" />
      </IconButton>
      {!showFields ? (
        <h5 className="new-todo-text">New Todo</h5>
      ) : (
        <div className="add-todo-fields">
          <TextField
            required
            id="outlined-required"
            label="title"
            defaultValue=""
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
}

export default AddATodoToList;
