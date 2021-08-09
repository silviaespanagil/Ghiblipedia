const OrderByABC = (props) => {
  const handleABCInput = (ev) => {
    props.handleFilter({ orderValue: ev.target.value, key: "order" });
  };
  return (
    <label htmlFor="orderABC" className="filters__label">
      Order by
      <select
        id="orderABC"
        name="orderABC"
        className="filters__select"
        onChange={handleABCInput}
      >
        <option value="A-Z" className="filters__select--options">
          A-Z
        </option>
        <option value="Z-A" className="filters__select--options">
          Z-A
        </option>
      </select>
    </label>
  );
};
export default OrderByABC;
