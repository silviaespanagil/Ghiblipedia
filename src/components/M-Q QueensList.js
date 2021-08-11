import { Link } from "react-router-dom";

//COMPONENTS

import NoQueen from "./M-Q - NoQueen";

const QueensList = (props) => {
  //RENDER QUEENS

  if (props.queens.length === 0) {
    return (
      <NoQueen userSearch={props.userSearch} resetSearch={props.resetSearch} />
    );
  }

  const favoriteQueens = props.favorites.map((favorite) => {
    return (
      <li key={favorite.id}>
        <h3>{favorite.name}</h3>
        <img src={favorite.url} alt={favorite.name} />
      </li>
    );
  });

  const allQueens = props.queens.map((queen, index) => {
    const isFavorite = props.favorites.find(
      (favorite) => favorite.id === queen.id
    );
    return (
      <article key={queen.id} className="apiList__card">
        <button id={index} onClick={() => props.favQueen(queen.id)}>
          <i
            className={isFavorite ? "fas fa-lg fa-star" : "far fa-lg fa-star"}
          ></i>
        </button>

        <Link to={`/queens/${queen.id}`}>
          <img
            src={queen.image_url}
            alt={`Portrait of ${queen.name}`}
            className="apiList__card--img"
          />
          <h2 className="apiList__card--name">{queen.name}</h2>
        </Link>
      </article>
    );
  });
  if (favoriteQueens.length !== 0) {
    return (
      <>
        <section>{allQueens}</section>
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
