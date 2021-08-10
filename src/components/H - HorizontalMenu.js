import { Link } from "react-router-dom";

const HorizontalMenu = () => {
  //MENU ITEMS

  const menuItems = [
    { item: "Home", path: "/" },
    { item: "Queens", path: "/queens" },
    { item: "Favs", path: "/favorites" },
  ];

  // RENDER MENU
  const RenderMenu = menuItems.map((item, i) => {
    return (
      <li key={i} className="header__menu--item">
        <Link to={item.path} className="header__menu--item-link">
          {item.item}
        </Link>
      </li>
    );
  });
  return (
    <nav className="header__menu">
      <ul className="header__menu--list">{RenderMenu}</ul>
    </nav>
  );
};

export default HorizontalMenu;
