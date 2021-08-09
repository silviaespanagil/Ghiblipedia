const FilterBySeason = (props) => {
  const handleWinner = (ev) => {
    props.handleFilter({ winnerValue: ev.target.value, key: "winner" });
  };

  return (
    <>
      <label htmlFor="winnerFilter" className="filters__label">
        Filter by Winners
        <select
          id="winnerFilter"
          name="winnerFilter"
          className="filters__select"
          onChange={handleWinner}
        >
          <option value="All" className="filters__select--options">
            All
          </option>
          <option value="Winner" className="filters__select--options">
            Winners
          </option>
        </select>
      </label>
    </>
  );
};
export default FilterBySeason;
