import React from "react";
import { MenuItem } from "./MenuItem";

export const Menu = ({ items }) => {
  return (
    <div className="menu-items">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
