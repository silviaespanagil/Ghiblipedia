import axios from "axios";
import { useEffect, useState } from "react";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  const [queens, setQueens] = useState(localQueens);
  const [filterQueen, setFilterQueen] = useState(localUserSearch);

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

  //METHODS

  //HANDLE  FILTER

  const handleFilter = (filterData) => {
    if (filterData.key === "name") {
      setFilterQueen(filterData.searchValue);
    }
  };
  return (
    <main className="main">
      <SearchArea handleFilter={handleFilter} userSearch={filterQueen} />
      <QueensList queens={queens} />
    </main>
  );
};
export default Main;
