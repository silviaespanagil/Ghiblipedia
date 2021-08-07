//IMAGES
import logo from "../images/ruLogo.png";

const Header = () => {
  //HEADER ITEMS
  const headerItems = ["Home", "Queens", "Seasons", "Favs"];

  //RENDERS
  // RENDER MENU
  const RenderMenu = headerItems.map((item, i) => {
    return (
      <li key={i}>
        <a href="">{item}</a>
      </li>
    );
  });

  return (
    <header>
      <img src={logo} alt="RuPaul's Drag Race Logo"></img>
      <nav>
        <ul>{RenderMenu}</ul>
      </nav>
    </header>
  );
};
export default Header;
