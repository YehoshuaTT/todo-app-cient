import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import {
  CategoryService,
  ListService,
  TodoService,
} from "../services/httpService";

function DeleteItem({ type, itemId, setItem }) {
  const services = [
    { lists: ListService },
    { categories: CategoryService },
    { todos: TodoService },
  ];

  const deletation = async (itemId) => {
    const service = services.find((service) => type in service);
    console.log(service);
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    await service[type].delete(itemId);
    setItem(await service[type].index());
  };

  return (
    <IconButton
      aria-label="delete"
      size="large"
      onClick={() => deletation(itemId)}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteItem;
