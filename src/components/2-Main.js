import axios from "axios";
import { useEffect, useState } from "react";

//COMPONENTS
import QueensList from "./M- QueensList";
import SearchArea from "./M - SearchArea";

const Main = () => {
  //STATES
  const [queens, setQueens] = useState(null);

  //API GET ALL QUEENS
  useEffect(() => {
    const queensURL = "http://www.nokeynoshade.party/api/queens/all";
    axios.get(queensURL).then((res) => {
      setQueens(res.data);
    });
  }, []);

  if (!queens) return null;
  return (
    <main className="main">
      <QueensList queens={queens} />
      <SearchArea />
    </main>
  );
};
export default Main;
