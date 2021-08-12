//COMPONENT

import FilterByWinner from "./M-Q - FilterByWinner";
import OrderByABC from "./M-Q - OrderByABC";

const Filters = (props) => {
  return (
    <form className={props.isDark ? "filters" : "filtersD"}>
      <FilterByWinner
        handleFilterQueen={props.handleFilterQueen}
        isDark={props.isDark}
      />
      <OrderByABC
        handleFilterQueen={props.handleFilterQueen}
        isDark={props.isDark}
      />
    </form>
  );
};
export default Filters;
