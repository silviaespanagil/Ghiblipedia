import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import Home from "./M-Home";
import SeasonList from "./M - SeasonList";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  //MAIN ARRAYS
  const [queens, setQueens] = useState(localQueens);
  const [seasons, setSeasons] = useState();

  //FILTERS & ORDER
  const [filterQueen, setFilterQueen] = useState(localUserSearch);
  const [filterWinner, setFilterWinner] = useState("");
  const [queensOrder, setQueensOrder] = useState("A-Z");

  //API GET ALL QUEENS
  useEffect(
    () => {
      const queensURL = "http://www.nokeynoshade.party/api/queens/all";
      const seasonURL = "http://www.nokeynoshade.party/api/seasons";

      if (localQueens.length === 0) {
        axios.get(queensURL).then((res) => {
          setQueens(res.data);
        });
      }
      axios.get(seasonURL).then((res) => {
        setSeasons(res.data);
      });
    },
    [queens],
    [seasons]
  );

  //LOCAL STORAGE SET
  useEffect(() => {
    localStorage.set("Queens", queens);
    localStorage.set("User Search", filterQueen);
  });

  if (!queens) return null;

  //HANDLERS

  //HANDLE  FILTER QUEENS

  const handleFilterQueen = (filterData) => {
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
      <Switch>
        <Route exact path={["/", "/queens"]}>
          <Home
            queens={renderFilter}
            handleFilterQueen={handleFilterQueen}
            userSearch={filterQueen}
            resetSearch={handleResetSearch}
          />
        </Route>
        <Route path="/seasons">
          <SeasonList />
        </Route>
      </Switch>
    </main>
  );
};
export default Main;
