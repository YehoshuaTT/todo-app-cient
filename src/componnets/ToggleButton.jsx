import { Switch } from "@mui/material";
import React from "react";
import { TodoService } from "../services/httpService";

function ToggleButton({ todoId, completed }) {
  const [checked, setChecked] = React.useState(completed);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const toggle = async (event) => {
    const toggled = await TodoService.toggle(todoId);
    toggled.status === 200 && setChecked(!event.target.checked);
  };
  return (
    <div>
      <Switch {...label} defaultChecked onChange={toggle} checked={checked} />
    </div>
  );
}

export default ToggleButton;
