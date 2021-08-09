//COMPONENT

import FilterByWinner from "./M - FilterByWinner";
import OrderByABC from "./M - OrderByABC";

const Filters = (props) => {
  return (
    <form className="filters">
      <FilterByWinner handleFilter={props.handleFilter} />
      <OrderByABC handleFilter={props.handleFilter} />
    </form>
  );
};
export default Filters;
