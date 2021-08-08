import axios from "axios";
import { useEffect, useState } from "react";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";

const Main = () => {
  //STATES
  const [queens, setQueens] = useState(null);
  const [filterQueen, setFilterQueen] = useState("");

  //API GET ALL QUEENS
  useEffect(() => {
    const queensURL = "http://www.nokeynoshade.party/api/queens/all";
    axios.get(queensURL).then((res) => {
      setQueens(res.data);
    });
  }, []);

  if (!queens) return null;

  //METHODS

  //HEARING SEARCH INPUT
  const userSearch = (e) => {
    setFilterQueen(e.target.value);
  };
  return (
    <main className="main">
      <SearchArea userSearch={userSearch} />
      <QueensList queens={queens} />
    </main>
  );
};
export default Main;
