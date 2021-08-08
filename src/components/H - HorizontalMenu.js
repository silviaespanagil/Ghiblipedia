const HorizontalMenu = () => {
  //MENU ITEMS

  const menuItems = [
    { item: "Home", path: "/" },
    { item: "Queens", path: "/queens" },
    { item: "Seasons", path: "/seasons" },
    { item: "Favs", path: "/favorites" },
  ];

  // RENDER MENU
  const RenderMenu = menuItems.map((item, i) => {
    return (
      <li key={i} className="header__menu--item">
        <a href={item.path}>{item.item}</a>
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
