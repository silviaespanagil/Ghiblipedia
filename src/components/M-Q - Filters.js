//COMPONENT

import FilterByWinner from "./M-Q - FilterByWinner";
import OrderByABC from "./M-Q - OrderByABC";

const Filters = (props) => {
  return (
    <form className="filters">
      <FilterByWinner handleFilterQueen={props.handleFilterQueen} />
      <OrderByABC handleFilterQueen={props.handleFilterQueen} />
    </form>
  );
};
export default Filters;
