import { Link } from "react-router-dom";

//COMPONENTS
import HorizontalMenu from "./H - HorizontalMenu";

//IMAGES
import logo from "../images/ruLogo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__image">
        <img src={logo} alt="RuPaul's Drag Race Logo"></img>
      </Link>
      <HorizontalMenu />
    </header>
  );
};
export default Header;
