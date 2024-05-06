import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  // Hook de react para mantener el estado
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="container mx-auto px-4">
      {/* Titulo */}
      <h1 className="text-3xl font-bold underline text-center mt-4">GifExpertApp</h1>
      {/* Input Search */}
      {/* INFO: Emitir un evento para agregar una nueva categoría */}
      <AddCategory onNewCategory={onAddCategory} />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))}

    </div>
  );
};
