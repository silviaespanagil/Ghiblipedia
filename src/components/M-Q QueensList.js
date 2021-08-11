import { Link } from "react-router-dom";

//COMPONENTS
import NoQueen from "./M-Q - NoQueen";

const QueensList = (props) => {
  //FAVORITE QUEENS
  const favoriteQueens = props.favorites.map((favorite) => {
    return (
      <li key={favorite.id}>
        <h3>{favorite.name}</h3>
        <img src={favorite.image_url} alt={favorite.name} />
      </li>
    );
  });

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
      <article key={queen.id} className="apiList__card">
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
          <div className="apiList__card--content">
            <img
              src={queen.image_url}
              alt={`Portrait of ${queen.name}`}
              className="apiList__card--content-img"
            />
            <h2 className="apiList__card--content-name">{queen.name}</h2>
          </div>
        </Link>
      </article>
    );
  });
  if (favoriteQueens.length !== 0) {
    return (
      <>
        <section className="queensWrapper">{allQueens}</section>
        <div>
          <h2>My top queens</h2>
          <ul>{favoriteQueens}</ul>
        </div>
      </>
    );
  } else {
    return <section className="apiList">{allQueens}</section>;
  }
};

export default QueensList;
