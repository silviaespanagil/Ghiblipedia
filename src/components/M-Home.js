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
      <Filters
        handleFilterQueen={props.handleFilterQueen}
        isDark={props.isDark}
      />
      <QueensList
        queens={props.queens}
        userSearch={props.userSearch}
        resetSearch={props.resetSearch}
        favorites={props.favorites}
        favQueen={props.favQueen}
        isDark={props.isDark}
      />
      ;
    </>
  );
};

export default Home;
