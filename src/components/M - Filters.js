import FilterBySeason from "./M - FilterBySeason";
import OrderByABC from "./M - OrderByABC";

const Filters = (props) => {
  return (
    <>
      <FilterBySeason handleFilter={props.handleFilter} />
      <OrderByABC handleFilter={props.handleFilter} />
    </>
  );
};
export default Filters;
