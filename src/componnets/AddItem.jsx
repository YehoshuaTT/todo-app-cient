import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import {
  CategoryService,
  ListService,
  TodoService,
} from "../services/httpService";
import EditFields from "./EditFields";

function AddItem({ type, itemId, setItem }) {
  const [showFields, setShowFields] = useState(false);

  const services = [
    { lists: ListService },
    { categories: CategoryService },
    { todos: TodoService },
  ];
  const addFunction = async (title, discription) => {
    debugger;
    const service = services.find((service) => type in service);
    console.log(service);

    if (await service[type].create({ title, discription })) {
      setShowFields(!showFields);
      setItem(await service[type].index());
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
      {showFields && <EditFields callBack={addFunction} />}
    </>
  );
}

export default AddItem;
