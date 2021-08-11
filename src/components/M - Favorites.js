const Favorites = (props) => {
  if (props.favorites.length === 0) {
    return <p>You have no favorite queens...yet</p>;
  }

  const favoriteQueens = props.favorites.map((favorite, index) => {
    const isFavorite = props.queens.find((queen) => favorite.id === queen.id);
    return (
      <li key={favorite.id} className="apiList__card">
        <button
          apiList__cardid={index}
          onClick={() => props.favQueen(favorite.id)}
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

        <article className="apiList__card--content">
          <img
            src={favorite.image_url}
            alt={`Portrait of ${favorite.name}`}
            className="apiList__card--content-img"
          />
          <h2 className="apiList__card--content-name">{favorite.name}</h2>
        </article>
      </li>
    );
  });

  return <section className="apiList">{favoriteQueens}</section>;
};

export default Favorites;
