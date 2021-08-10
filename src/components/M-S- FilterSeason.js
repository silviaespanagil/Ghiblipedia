const FilterSeasons = (props) => {
  const seasonName = props.seasons.map((season) => {
    return (
      <label
        htmlFor={`input${season.seasonNumber}`}
        className="searchArea__form--season"
      >
        {season.seasonNumber}
        <input
          type="checkbox"
          id={`input${season.seasonNumber}`}
          value={season.seasonNumber}
          className="searchArea__form--season-input"
        />
      </label>
    );
  });
  return (
    <section className="searchArea">
      <h2 className="searchArea__title">RPDR Seasons</h2>
      <form className="searchArea__form">{seasonName}</form>
    </section>
  );
};
export default FilterSeasons;
