const FilterBySeason = (props) => {
  const handleWinner = (ev) => {
    props.handleFilter({ winnerValue: ev.target.value, key: "winner" });
  };

  return (
    <>
      <label htmlFor="winnerFilter">
        Filter by Winners
        <select id="winnerFilter" name="winnerFilter" onChange={handleWinner}>
          <option value="All">All</option>
          <option value="Winner">Won</option>
          <option value="Loser">Didn't win</option>
        </select>
      </label>
    </>
  );
};
export default FilterBySeason;
