import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ListService } from "../services/httpService";

function EditList({ itemId, setLists, text }) {
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState(text.title);

  const EditFunction = async () => {
    if (title?.length > 0) {
      if (await ListService.update(itemId, { title })) {
        setShowFields(false);
        setLists(await ListService.index());
      }
    } else {
      setTitle(text.title);
      setShowFields(false);
    }
  };

  return (
    <div className="edit-list" onBlur={EditFunction}>
      {!showFields ? (
        <h3 onClick={() => setShowFields(!showFields)}>{text.title}</h3>
      ) : (
        <TextField
          size="small"
          id="outlined-required"
          label="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={true}
        />
      )}
    </div>
  );
}

export default EditList;
