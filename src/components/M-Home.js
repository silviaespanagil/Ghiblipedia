//COMPONENTS
import SearchArea from "./M-Q - SearchArea";
import Filters from "./M-Q - Filters";
import QueensList from "./M-Q QueensList";

const Home = (props) => {
  return (
    <>
      <SearchArea
        userSearch={props.filterQueen}
        handleFilterQueen={props.handleFilterQueen}
      />
      <Filters handleFilterQueen={props.handleFilterQueen} />
      <QueensList
        queens={props.queens}
        userSearch={props.userSearch}
        resetSearch={props.resetSearch}
      />
      ;
    </>
  );
};

export default Home;
