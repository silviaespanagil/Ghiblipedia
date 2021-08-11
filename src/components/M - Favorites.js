const Favorites = (props) => {
  if (props.favorites.length === 0) {
    return <p>You have no favorite queens...yet</p>;
  }

  const favoriteQueens = props.favorites.map((favorite) => {
    return (
      <article key={favorite.id} className="apiList__card">
        <img
          src={favorite.image_url}
          alt={`Portrait of ${favorite.name}`}
          className="apiList__card--img"
        />
        <h2 className="apiList__card--name">{favorite.name}</h2>
      </article>
    );
  });

  return <section className="apiList">{favoriteQueens}</section>;
};

export default Favorites;
