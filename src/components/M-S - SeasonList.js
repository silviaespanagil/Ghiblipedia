const SeasonList = (props) => {
  const allSeasons = props.seasons.map((season, index) => {
    return (
      <>
        <article key={index} className="apiList__card">
          <img
            src={season.image_url}
            alt={`Group of season ${season.seasonNumber} queens`}
            className="apiList__card--img"
          />
          <h2 className="apiList__card--name">Season {season.seasonNumber}</h2>
        </article>
      </>
    );
  });
  return <section className="apiList">{allSeasons}</section>;
};
export default SeasonList;
