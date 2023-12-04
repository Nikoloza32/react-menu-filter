import React from "react";

export const Categories = ({ categories, handleCategory }) => {
  return (
    <div className="buttons">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="category-btn"
            type="button"
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
