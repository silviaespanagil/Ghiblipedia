import { Link } from "react-router-dom";

//COMPONENTS
import HorizontalMenu from "./H - HorizontalMenu";

//IMAGES
import logo from "../images/ruLogo.jpeg";

const Header = (props) => {
  return (
    <header className={props.isDark ? "header" : "headerD"}>
      <Link
        to="/"
        className={props.isDark ? "header__image" : "headerD__image"}
      >
        <img
          src={logo}
          alt="RuPaul's Drag Race Logo"
          className="header__logo"
        ></img>
      </Link>
      <HorizontalMenu
        handleDarkMode={props.handleDarkMode}
        isDark={props.isDark}
      />
    </header>
  );
};
export default Header;
