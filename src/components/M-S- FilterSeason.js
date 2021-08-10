const FilterSeasons = (props) => {
  //HANDLER

  //VALUE LISTENER
  const handleSeason = (ev) => {
    props.handleFilterSeason({ seasonValue: ev.target.value, key: "season" });
  };

  //RENDERS

  //RENDER CHECKBOXES
  const renderCheckbox = props.seasons.map((season) => {
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
          onClick={handleSeason}
        />
      </label>
    );
  });

  return (
    <section className="searchArea">
      <form className="searchArea__form">
        <h2 className="searchArea__title">Seasons</h2>
        <div className="searchArea__form--season">{renderCheckbox}</div>
      </form>
    </section>
  );
};
export default FilterSeasons;
