import { useState } from "react";
import { Title } from "./components/Title";
import menu from "./data";
import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const handleCategory = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu-wraper">
      <Title title="Our Menu" />
      <Categories categories={categories} handleCategory={handleCategory} />
      <Menu items={menuItems} />
    </div>
  );
};
export default App;
