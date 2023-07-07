import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ListService } from "../services/httpService";

function EditList({ itemId, setLists, text }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState(text.title);
  const [description, setDescription] = useState(text.description);

  const EditFunction = async () => {
    if (title?.length > 0) {
      if (await ListService.update(itemId, { title, description })) {
        setShowFields(false);
        setLists(await ListService.index());
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

export default EditList;
