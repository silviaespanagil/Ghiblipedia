const FilterSeasons = (props) => {
  const seasonName = props.seasons.map((season) => {
    return (
      <label
        htmlFor={`input${season.seasonNumber}`}
        className="searchArea__form--season-label"
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
      <form className="searchArea__form">
        <h2 className="searchArea__title">Seasons</h2>
        <div className="searchArea__form--season">{seasonName}</div>
      </form>
    </section>
  );
};
export default FilterSeasons;
