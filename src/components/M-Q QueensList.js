import { Link } from "react-router-dom";

//COMPONENTS
import NoQueen from "./M-Q - NoQueen";

const QueensList = (props) => {
  //RENDER FOR WHEN THE SEARCH SHOWS NO RESULTS
  if (props.queens.length === 0) {
    return (
      <NoQueen userSearch={props.userSearch} resetSearch={props.resetSearch} />
    );
  }

  const allQueens = props.queens.map((queen, index) => {
    const isFavorite = props.favorites.find(
      (favorite) => favorite.id === queen.id
    );
    return (
      <li key={queen.id} className="apiList__card">
        <button
          apiList__cardid={index}
          onClick={() => props.favQueen(queen.id)}
          className="apiList__card--fav"
        >
          <i
            className={
              isFavorite
                ? "fas fa-lg fa-star apiList__card--fav-icon "
                : "far fa-lg fa-star apiList__card--fav-icon"
            }
          ></i>
        </button>

        <Link to={`/queens/${queen.id}`}>
          <article className="apiList__card--content">
            <img
              src={queen.image_url}
              alt={`Portrait of ${queen.name}`}
              className="apiList__card--content-img"
            />
            <h2 className="apiList__card--content-name">{queen.name}</h2>
          </article>
        </Link>
      </li>
    );
  });
  /* if (favoriteQueens.length !== 0) {
    return (
      <section className="queensWrapper">
        <ul>{allQueens}</ul>
        <section className="homeFavorites">
          <h2 className="homeFavorites__title">My top queens</h2>
          <ul className="homeFavorites__list">{favoriteQueens}</ul>
        </section>
      </section>
    );
  } else {*/
  return (
    <section>
      <ul className="apiList">{allQueens}</ul>
    </section>
  );
};

export default QueensList;
