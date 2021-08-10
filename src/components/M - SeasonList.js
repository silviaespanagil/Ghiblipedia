const SeasonList = (props) => {
  const allSeasons = props.seasons.map((season) => {
    return (
      <>
        <article key={season.id}>
          <img
            src={season.image_url}
            alt={`Group picture of the ${season.seasonNumber} queens`}
          />
          <h2 className="queensList__card--name">{season.seasonNumber}</h2>
        </article>
      </>
    );
  });
  return <>{allSeasons}</>;
};
export default SeasonList;
