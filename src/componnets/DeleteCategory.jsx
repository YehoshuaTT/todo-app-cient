import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { CategoryService } from "../services/httpService";

function DeleteCategory({ itemId, setCategories }) {
  const deletation = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    await CategoryService.delete(itemId);
    setCategories(await CategoryService.index());
  };

  return (
    <IconButton aria-label="delete" size="large" onClick={() => deletation()}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteCategory;
