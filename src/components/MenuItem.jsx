import React from "react";

export const MenuItem = ({ title, category, img, desc, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-header">
        <img className="menu-img" src={img} alt={title} />
        <span className="menu-price">${price}</span>
      </div>
      <div className="menu-body">
        <h4 className="menu-title">{title}</h4>
        <p className="menu-desc">{desc}</p>
      </div>
    </div>
  );
};
