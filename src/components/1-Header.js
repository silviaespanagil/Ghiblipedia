import { useState } from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import HorizontalMenu from "./H - HorizontalMenu";

//IMAGES
import logo from "../images/ruLogo.png";

const Header = () => {
  const [mode, setMode] = useState(false);

  const handleDarkMode = () => {
    setMode(!mode);
  };
  console.log(mode);
  const isDark = mode === false;

  return (
    <header className={isDark ? "header" : "headerD"}>
      <Link to="/" className={isDark ? "header__image" : "headerD__image"}>
        <img src={logo} alt="RuPaul's Drag Race Logo"></img>
      </Link>
      <HorizontalMenu />
      <p onClick={handleDarkMode}>Darkmode</p>
    </header>
  );
};
export default Header;
