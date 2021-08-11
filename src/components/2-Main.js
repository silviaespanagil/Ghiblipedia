import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//SERVICES
import localStorage from "../service/LocalStorage";

//COMPONENTS
import Home from "./M-Home";
import QueenDetail from "./M-Q - QueenDetail";
import Favorites from "./M - Favorites";
import NoQueen from "./M-Q - NoQueen";
import DontExist from "./M - DontExist";

const Main = () => {
  const localQueens = localStorage.get("Queens", []);
  const localUserSearch = localStorage.get("User Search", "");

  //STATES
  //MAIN ARRAYS
  const [queens, setQueens] = useState(localQueens);
  const [favorites, setFavorites] = useState([]);

  //FILTERS & ORDER
  const [filterQueen, setFilterQueen] = useState(localUserSearch);
  const [filterWinner, setFilterWinner] = useState("");
  const [queensOrder, setQueensOrder] = useState("A-Z");

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

  //FAVORITES SETTING
  const favQueen = (clickedQueen) => {
    const favoritedQueen = favorites.find((queen) => {
      console.log(queen.id, clickedQueen);
      return queen.id === clickedQueen;
    });
    console.log(favoritedQueen);
    if (favoritedQueen === undefined) {
      const queenFav = queens.find((queen) => {
        return queen.id === clickedQueen;
      });
      setFavorites([...favorites, queenFav]);

      return;
    }
    const newFavorites = favorites.filter((queen) => queen.id !== clickedQueen);
    setFavorites(newFavorites);
  };

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

  //RENDER QUEEN DETAIL DINAMIC ROUTE

  const renderQueenDetail = (routerProps) => {
    const routerId = routerProps.match.params.id;
    const queenFound = queens.find((queen) => queen.id === parseInt(routerId));

    if (queenFound) {
      return <QueenDetail queen={queenFound} />;
    } else <NoQueen />;
  };
  return (
    <main className="main">
      <Switch>
        <Route exact path={["/", "/queens"]}>
          <Home
            queens={renderFilterQueen}
            handleFilterQueen={handleFilterQueen}
            userSearch={filterQueen}
            resetSearch={handleResetSearch}
            favorites={favorites}
            favQueen={favQueen}
          />
        </Route>
        <Route path="/queens/:id" render={renderQueenDetail} />
        <Route path="/favorites">
          <Favorites
            favorites={favorites}
            queens={queens}
            favQueen={favQueen}
          />
        </Route>
        <Route component={DontExist} />
      </Switch>
    </main>
  );
};
export default Main;
