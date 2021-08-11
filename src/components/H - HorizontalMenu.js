import { Link } from "react-router-dom";

const HorizontalMenu = (props) => {
  //MENU ITEMS

  const menuItems = [
    { item: "Home", path: "/" },
    { item: "Queens", path: "/queens" },
    { item: "Favs", path: "/favorites" },
  ];

  // RENDER MENU
  const RenderMenu = menuItems.map((item, i) => {
    return (
      <li
        key={i}
        className={props.isDark ? "header__menu--item" : "headerD__menu--item"}
      >
        <Link
          to={item.path}
          className={
            props.isDark
              ? "header__menu--item-link"
              : "headerD__menu--item-link"
          }
        >
          {item.item}
        </Link>
      </li>
    );
  });
  return (
    <nav className={props.isDark ? "header__menu" : "headerD__menu"}>
      <ul
        className={props.isDark ? "header__menu--list" : "headerD__menu--list"}
      >
        {RenderMenu}
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
