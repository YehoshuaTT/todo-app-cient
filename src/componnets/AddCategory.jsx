import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { CategoryService } from "../services/httpService";

function AddCategory({ setCategories }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState([]);

  const addFunction = async () => {
    if (title?.length > 0) {
      if (await CategoryService.create({ title })) {
        setShowFields(!showFields);
        setCategories(await CategoryService.index());
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
        </>
      )}
    </>
  );
}

export default AddCategory;
