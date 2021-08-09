import axios from "axios";
import { useEffect, useState } from "react";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";
import FilterBySeason from "./M - FilterBySeason";
import OrderByABC from "./M - OrderByABC";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  const [queens, setQueens] = useState(localQueens);
  const [filterQueen, setFilterQueen] = useState(localUserSearch);
  const [filterWinner, setFilterWinner] = useState("");
  const [queensOrder, setQueensOrder] = useState("");

  //API GET ALL QUEENS
  useEffect(() => {
    const queensURL = "http://www.nokeynoshade.party/api/queens/all";
    if (localQueens.length === 0) {
      axios.get(queensURL).then((res) => {
        setQueens(res.data);
      });
    }
  }, [queens]);

  //LOCAL STORAGE SET
  useEffect(() => {
    localStorage.set("Queens", queens);
    localStorage.set("User Search", filterQueen);
  });

  if (!queens) return null;

  //HANDLERS

  //HANDLE  FILTER

  const handleFilter = (filterData) => {
    if (filterData.key === "name") {
      setFilterQueen(filterData.searchValue);
    } else if (filterData.key === "winner") {
      setFilterWinner(filterData.winnerValue);
    } else if (filterData.key === "order") {
      setQueensOrder(filterData.orderValue);
    }
  };

  //RESET USER SEARCH

  const handleResetSearch = () => {
    return setFilterQueen("");
  };

  //ORDER QUEENS A-Z

  /*const orderQueens = () => {
    const orderQueen = ifqueens.sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setQueens(orderQueen);
  };
*/
  // RENDERS

  //RENDERFILTERS
  const renderFilter = queens
    .filter((queen) => {
      return queen.name.toLowerCase().includes(filterQueen.toLowerCase());
    })
    .filter((queen) => {
      if (filterWinner === "Winner") {
        return queen.winner === true;
      }
      return queen;
    })
    .sort((a, b) => {
      if (queensOrder === "A-Z") {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      } else {
        return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
      }
    });

  return (
    <main className="main">
      <SearchArea handleFilter={handleFilter} userSearch={filterQueen} />
      <FilterBySeason handleFilter={handleFilter} />
      <OrderByABC handleFilter={handleFilter} />
      <QueensList
        queens={renderFilter}
        userSearch={filterQueen}
        resetSearch={handleResetSearch}
      />
    </main>
  );
};
export default Main;
