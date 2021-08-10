import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import Home from "./M-Home";
import Seasons from "./M-Seasons";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localSeasons = localStorage.get("Seasons", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  //MAIN ARRAYS
  const [queens, setQueens] = useState(localQueens);
  const [seasons, setSeasons] = useState(localSeasons);

  //FILTERS & ORDER
  const [filterQueen, setFilterQueen] = useState(localUserSearch);
  const [filterSeason, setFilterSeason] = useState(localSeasons);
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
      if (localSeasons.length === 0) {
        axios.get(seasonURL).then((res) => {
          res.data.sort((a, b) => {
            return a.id > b.id ? 1 : -1;
          });
          setSeasons(res.data);
        });
      }
    },
    [queens],
    [seasons]
  );

  //LOCAL STORAGE SET
  useEffect(() => {
    localStorage.set("Queens", queens);
    localStorage.set("Seasons", seasons);
    localStorage.set("User Search", filterQueen);
  });

  if (!queens) return null;
  if (!seasons) return null;

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

  //HANDLE  FILTER SEASON

  const handleFilterSeason = (filterSeason) => {
    if (filterSeason.key === "season") {
      setFilterSeason(filterSeason.seasonValue);
    }
  };

  //RESET USER SEARCH

  const handleResetSearch = () => {
    return setFilterQueen("");
  };

  // RENDERS

  //RENDER FILTERED QUEENS
  const renderFilterQueen = queens
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
            queens={renderFilterQueen}
            handleFilterQueen={handleFilterQueen}
            userSearch={filterQueen}
            resetSearch={handleResetSearch}
          />
        </Route>
        <Route path="/seasons">
          <Seasons seasons={seasons} handleFilterSeason={handleFilterSeason} />
        </Route>
      </Switch>
    </main>
  );
};
export default Main;
