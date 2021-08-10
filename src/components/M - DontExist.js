import { Link } from "react-router-dom";

//IMAGES

import sashayAway from "../images/SashayAway.gif";

const DontExist = () => {
  return (
    <section className="dontExist">
      <p className="dontExist__text">Ops, this page Sashayed Away</p>
      <img
        src={sashayAway}
        alt="Gif of Heidi n Closet looking around confused"
        className="dontExist__img"
      />
      <Link to="/queens" className="dontExist__back">
        Bring back my girls
      </Link>
    </section>
  );
};

export default DontExist;
