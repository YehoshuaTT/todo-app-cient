import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { CategoryService } from "../services/httpService";

function EditCategory({ itemId, setCategories, text }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState(text.title);

  const EditFunction = async () => {
    if (title?.length > 0) {
      if (await CategoryService.update(itemId, { title })) {
        setShowFields(false);
        setCategories(await CategoryService.index());
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
        </>
      )}
    </>
  );
}

export default EditCategory;
