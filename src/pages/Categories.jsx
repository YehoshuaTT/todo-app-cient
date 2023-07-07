import React, { useEffect, useState } from "react";
import { CategoryService } from "../services/httpService";
import AddItem from "../componnets/AddItem";
import DeleteItem from "../componnets/DeleteItem";
import EditItem from "../componnets/EditItem";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchdCategories = await CategoryService.index();
      console.log(fetchdCategories);
      setCategories(fetchdCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="category">
      My Categories: <AddItem type={"categories"} setItem={setCategories} />
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id} className="category-container">
            <div className="category-title">{category.title}</div>
            <div className="category-description">{category.description}</div>
            <DeleteItem
              type={"categories"}
              itemId={category._id}
              setItem={setCategories}
            />
            <EditItem
              type={"categories"}
              itemId={category._id}
              setItem={setCategories}
              text={{
                title: category.title,
                description: category.description,
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
