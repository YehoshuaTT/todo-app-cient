import { TextField } from "@mui/material";
import React, { useState } from "react";

function EditFields({ callBack }) {
  const [discription, setDiscription] = useState(undefined);
  const [title, setTitle] = useState(undefined);

  const manegFields = async () => {
    if (title?.length > 0 && discription?.length > 0)
      callBack(title, discription);
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
        id="outlined-required"
        label="discription"
        placeholder="Discripsion"
        onChange={(e) => setDiscription(e.target.value)}
        onBlur={manegFields}
      />
    </>
  );
}

export default EditFields;
