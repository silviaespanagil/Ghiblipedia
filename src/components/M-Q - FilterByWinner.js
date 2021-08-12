const FilterBySeason = (props) => {
  const handleWinner = (ev) => {
    props.handleFilterQueen({ winnerValue: ev.target.value, key: "winner" });
  };

  return (
    <>
      <label
        htmlFor="winnerFilter"
        className={props.isDark ? "filters__label" : "filtersD__label"}
      >
        Filter by Winners
        <select
          id="winnerFilter"
          name="winnerFilter"
          className={props.isDark ? "filters__select" : "filtersD__select"}
          onChange={handleWinner}
        >
          <option value="All">All</option>
          <option value="Winner">Winners</option>
        </select>
      </label>
    </>
  );
};
export default FilterBySeason;
