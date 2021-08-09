import axios from "axios";
import { useEffect, useState } from "react";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";
import FilterBySeason from "./M - FilterBySeason";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  const [queens, setQueens] = useState(localQueens);
  const [filterQueen, setFilterQueen] = useState(localUserSearch);
  const [filterWinner, setFilterWinner] = useState("");

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
    }
  };

  //RESET USER SEARCH

  const handleResetSearch = () => {
    return setFilterQueen("");
  };

  // RENDERS

  //RENDERFILTERS
  const renderFilter = queens
    .filter((queen) => {
      return queen.name.toLowerCase().includes(filterQueen.toLowerCase());
    })
    .filter((queen) => {
      if (filterWinner === "Winner") {
        return queen.winner === true;
      } else if (filterWinner === "Loser") {
        return queen.winner === false;
      } else return queen;
    });

  return (
    <main className="main">
      <SearchArea handleFilter={handleFilter} userSearch={filterQueen} />
      <FilterBySeason handleFilter={handleFilter} />
      <QueensList
        queens={renderFilter}
        userSearch={filterQueen}
        resetSearch={handleResetSearch}
      />
    </main>
  );
};
export default Main;
