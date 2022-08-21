import { menuItems } from "../menuItems";
import InputWithIcon from "./InputWithIcon";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        <InputWithIcon />
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
