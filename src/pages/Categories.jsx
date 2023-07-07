import React, { useEffect, useState } from "react";
import { CategoryService } from "../services/httpService";
import AddCategory from "../componnets/AddCategory";
import EditCategory from "../componnets/EditCategory";
import DeleteCategory from "../componnets/DeleteCategory";

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
      My Categories: <AddCategory setCategories={setCategories} />
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id} className="category-container">
            <div className="category-title">{category.title}</div>
            <div className="category-description">{category.description}</div>
            <DeleteCategory
              itemId={category._id}
              setCategories={setCategories}
            />
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
