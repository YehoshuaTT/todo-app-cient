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
    <div className="toggle">
      <Switch {...label} onChange={toggle} checked={checked} />
      <h6 className="completed">Completed</h6>
    </div>
  );
}

export default ToggleButton;
