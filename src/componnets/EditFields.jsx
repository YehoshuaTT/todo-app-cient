import { TextField } from "@mui/material";
import React, { useState } from "react";

function EditFields({ callBack, text }) {
  const [title, setTitle] = useState(text.title);
  const [description, setDescription] = useState(text.description);

  const manegFields = async () => {
    if (title?.length > 0 && description?.length > 0)
      callBack(title, description);
  };

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="title"
        defaultValue={text.title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={manegFields}
      />
      <TextField
        required
        id="outlined-required"
        label="description"
        defaultValue={text.description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={manegFields}
      />
    </>
  );
}

export default EditFields;
