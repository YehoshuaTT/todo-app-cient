import { TextField } from "@mui/material";
import React, { useState } from "react";

function EditFields({ callBack }) {
  const [description, setDescription] = useState(undefined);
  const [title, setTitle] = useState(undefined);

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
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        onBlur={manegFields}
      />
      <TextField
        required
        id="outlined-required"
        label="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        onBlur={manegFields}
      />
    </>
  );
}

export default EditFields;
