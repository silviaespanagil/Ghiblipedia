import axios from "axios";
import { useEffect, useState } from "react";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";

const Main = () => {
  const localQueens = localStorage.get("Queens:", []);
  const localUserSearch = localStorage.get("User Last Search:", "");

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

  //LISTEN SEARCH INPUT
  const userSearch = (e) => {
    setFilterQueen(e.target.value.toLowerCase());
  };
  return (
    <main className="main">
      <SearchArea />
      <QueensList queens={queens} />
    </main>
  );
};
export default Main;
