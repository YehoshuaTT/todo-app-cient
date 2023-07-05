import React from "react";
import { IconButton } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  CategoryService,
  ListService,
  TodoService,
} from "../services/httpService";

function EditItem({ type, itemId, setItem }) {
  const services = [
    { lists: ListService },
    { categories: CategoryService },
    { todos: TodoService },
  ];

  const deletation = async (itemId) => {
    const service = services.find((service) => type in service);
    console.log(service);
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    await service[type].update(itemId);
    setItem(await service[type].index());
  };

  return (
    <IconButton
      aria-label="delete"
      size="large"
      onClick={() => deletation(itemId)}
    >
      <ModeEditOutlineOutlinedIcon fontSize="inherit" />
    </IconButton>
  );
}

export default EditItem;
