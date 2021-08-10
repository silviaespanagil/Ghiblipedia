//COMPONENTS
import FilterSeasons from "./M-S- FilterSeason";
import SeasonList from "./M-S - SeasonList";

const Seasons = (props) => {
  return (
    <>
      <FilterSeasons
        seasons={props.seasons}
        handleFilterSeason={props.handleFilterSeason}
      />
      <SeasonList seasons={props.seasons} />
    </>
  );
};
export default Seasons;
