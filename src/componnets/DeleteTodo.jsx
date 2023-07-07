import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { ListService, TodoService } from "../services/httpService";

function DeleteTodo({ itemId, setTodos, setLists }) {
  const deletation = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    await TodoService.delete(itemId);
    setLists && setLists(await ListService.index());
    setTodos(await TodoService.index());
  };

  return (
    <IconButton aria-label="delete" size="large" onClick={() => deletation()}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteTodo;
