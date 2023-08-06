import React, { useEffect, useState } from "react";
import { CategoryService } from "../services/httpService";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCategory from "../componnets/EditCategory";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState([]);
  const [showFields, setShowFields] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchdCategories = await CategoryService.index();
      setCategories(fetchdCategories);
    };

    fetchCategories();
  }, []);

  const deletation = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    await CategoryService.delete(itemId);
    setCategories(await CategoryService.index());
  };

  const addFunction = async () => {
    console.log("Sdfsd");
    if (title?.length > 0) {
      if (await CategoryService.create({ title })) {
        setShowFields(!showFields);
        setCategories(await CategoryService.index());
        setTitle("");
      }
    }
  };

  return (
    <div className="category">
      My Categories:{" "}
      <IconButton
        aria-label="add"
        size="large"
        onClick={() => setShowFields(!showFields)}
      >
        <AddBoxOutlinedIcon fontSize="inherit" />
      </IconButton>
      {showFields && (
        <>
          <TextField
            required
            id="outlined-required"
            label="title"
            defaultValue=""
            onChange={(e) => setTitle(e.target.value)}
            onBlur={addFunction}
          />
        </>
      )}
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id} className="category-container">
            <div className="category-title">{category.title}</div>
            <div className="category-description">{category.description}</div>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => deletation(category._id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <EditCategory
              itemId={category._id}
              setCategories={setCategories}
              text={{
                title: category.title,
              }}
            />
          </div>
        ))
      ) : (
        <p>No categories</p>
      )}
    </div>
  );
}

export default Categories;
