//COMPONENTS
import BurgerMenu from "./H - BurgerMenu";

//IMAGES
import logo from "../images/ruLogo.png";

const Header = () => {
  //HEADER ITEMS

  const headerItems = [
    { item: "Home", path: "/" },
    { item: "Queens", path: "/queens" },
    { item: "Seasons", path: "/seasons" },
    { item: "Favs", path: "/favorites" },
  ];

  // RENDER MENU
  const RenderMenu = headerItems.map((item, i) => {
    return (
      <li key={i} className="header__menu--item">
        <a href={item.path}>{item.item}</a>
      </li>
    );
  });

  return (
    <header className="header">
      <img
        src={logo}
        alt="RuPaul's Drag Race Logo"
        className="header__img"
      ></img>
      <BurgerMenu />
      <nav className="header__menu">
        <ul className="header__menu--list">{RenderMenu}</ul>
      </nav>
    </header>
  );
};
export default Header;
