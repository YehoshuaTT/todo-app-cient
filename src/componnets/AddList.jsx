import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { ListService } from "../services/httpService";

function AddList({ setLists }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const addFunction = async () => {
    if (title?.length > 0) {
      if (await ListService.create({ title, description })) {
        setShowFields(!showFields);
        setLists(await ListService.index());
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

export default AddList;
