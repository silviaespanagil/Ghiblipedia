import { Link } from "react-router-dom";

const NoFavorites = () => {
  return (
    <section className="noFav">
      <h3 className="noFav__text">The shade of it all!</h3>
      <p>You have no favorite queens yet...go back and add some</p>
      <Link to="/queens" className="dontExist__back">
        Go back
      </Link>
    </section>
  );
};
export default NoFavorites;
