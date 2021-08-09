//COMPONENTS
import HorizontalMenu from "./H - HorizontalMenu";

//IMAGES
import logo from "../images/ruLogo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="RuPaul's Drag Race Logo"
        className="header__img"
      ></img>
      <HorizontalMenu />
    </header>
  );
};
export default Header;
