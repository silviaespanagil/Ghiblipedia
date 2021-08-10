//COMPONENTS
import SearchArea from "./M - SearchArea";
import Filters from "./M - Filters";
import QueensList from "./M- QueensList";

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
        userSearch={props.filterQueen}
        resetSearch={props.handleResetSearch}
      />
      ;
    </>
  );
};

export default Home;
