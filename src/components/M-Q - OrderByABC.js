const OrderByABC = (props) => {
  const handleABCInput = (ev) => {
    props.handleFilterQueen({ orderValue: ev.target.value, key: "order" });
  };
  return (
    <label
      htmlFor="orderABC"
      className={props.isDark ? "filters__label" : "filtersD__label"}
    >
      Order by
      <select
        id="orderABC"
        name="orderABC"
        className={props.isDark ? "filters__select" : "filtersD__select"}
        onChange={handleABCInput}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </label>
  );
};
export default OrderByABC;
