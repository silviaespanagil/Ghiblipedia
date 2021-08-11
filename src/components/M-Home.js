//COMPONENTS
import GoTop from "./M - GoTop";
import SearchArea from "./M-Q - SearchArea";
import Filters from "./M-Q - Filters";
import QueensList from "./M-Q QueensList";

const Home = (props) => {
  return (
    <>
      <GoTop showGoTop={props.showGoTop} scrollUp={props.scrollUp} />
      <SearchArea
        userSearch={props.filterQueen}
        handleFilterQueen={props.handleFilterQueen}
      />
      <Filters handleFilterQueen={props.handleFilterQueen} />
      <QueensList
        queens={props.queens}
        userSearch={props.userSearch}
        resetSearch={props.resetSearch}
        favorites={props.favorites}
        favQueen={props.favQueen}
      />
      ;
    </>
  );
};

export default Home;
