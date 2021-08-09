//COMPONENT

import FilterByWinner from "./M - FilterByWinner";
import OrderByABC from "./M - OrderByABC";

const Filters = (props) => {
  return (
    <form className="filters">
      <FilterByWinner handleFilterQueen={props.handleFilterQueen} />
      <OrderByABC handleFilterQueen={props.handleFilterQueen} />
    </form>
  );
};
export default Filters;
