const OrderByABC = (props) => {
  const handleABCInput = (ev) => {
    props.handleFilter({ orderValue: ev.target.value, key: "order" });
  };
  return (
    <label htmlFor="orderABC">
      Order by
      <select id="orderABC" name="orderABC" onChange={handleABCInput}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </label>
  );
};
export default OrderByABC;
