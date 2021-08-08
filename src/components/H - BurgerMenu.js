import { useState } from "react";

//PACKAGES
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  //STATES

  let [isClosed, setClosed] = useState();

  //HANDLE MENU

  const closeMenuHandler = () => {
    if (isClosed === false) {
      return setClosed(true);
    } else {
      setClosed(false);
    }
  };
  return (
    <Menu isOpen={isClosed} width={230} right>
      <a href="" alt="Volver a la  home" onClick={closeMenuHandler}>
        Home
      </a>
    </Menu>
  );
};
export default BurgerMenu;
