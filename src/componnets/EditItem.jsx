import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EditFields from "./EditFields";
import {
  CategoryService,
  ListService,
  TodoService,
} from "../services/httpService";

function EditItem({ type, itemId, setItem, text }) {
  const [showFields, setShowFields] = useState(false);

  const services = [
    { lists: ListService },
    { categories: CategoryService },
    { todos: TodoService },
  ];
  const EditFunction = async (title, description) => {
    const service = services.find((service) => type in service);
    debugger;
    if (await service[type].update(itemId, { title, description })) {
      setShowFields(false);
      setItem(await service[type].index());
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

      {showFields && <EditFields callBack={EditFunction} text={text} />}
    </>
  );
}

export default EditItem;
