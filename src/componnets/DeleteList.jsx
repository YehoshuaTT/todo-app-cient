import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { ListService } from "../services/httpService";

function DeleteList({ itemId, setLists }) {
  const deletation = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    await ListService.delete(itemId);
    setLists(await ListService.index());
  };

  return (
    <IconButton aria-label="delete" size="large" onClick={() => deletation()}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteList;
