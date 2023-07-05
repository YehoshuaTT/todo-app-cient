import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {};

    return () => {
      fetchCategories();
    };
  }, []);

  return <div>Categories</div>;
}

export default Categories;
