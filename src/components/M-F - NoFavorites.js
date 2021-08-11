import { Link } from "react-router-dom";

const NoFavorites = (props) => {
  return (
    <section className={props.isDark ? "noFav" : "noFavD"}>
      <h3 className={props.isDark ? "noFav__text" : "noFavD__text"}>
        The shade of it all!
      </h3>
      <p className={props.isDark ? "noFav__paragraph" : "noFavD__paragraph"}>
        You have no favorite queens yet...go back and add some
      </p>
      <Link to="/queens" className="dontExist__back">
        Go back
      </Link>
    </section>
  );
};
export default NoFavorites;
