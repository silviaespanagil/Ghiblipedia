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
      <li
        key={queen.id}
        className={props.isDark ? "apiList__card" : "apiListD__card"}
      >
        <button
          id={index}
          onClick={() => props.favQueen(queen.id)}
          className={
            props.isDark ? "apiList__card--fav" : "apiListD__card--fav"
          }
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
          <article
            className={
              props.isDark
                ? "apiList__card--content"
                : "apiListD__card--content"
            }
          >
            <img
              src={queen.image_url}
              alt={`Portrait of ${queen.name}`}
              className={
                props.isDark
                  ? "apiList__card--content-img"
                  : "apiListD__card--content-img"
              }
            />
            <h2
              className={
                props.isDark
                  ? "apiList__card--content-name"
                  : "apiListD__card--content-name"
              }
            >
              {queen.name}
            </h2>
          </article>
        </Link>
      </li>
    );
  });

  return (
    <section>
      <ul className={props.isDark ? "apiList" : "apiListD"}>{allQueens}</ul>
    </section>
  );
};

export default QueensList;
