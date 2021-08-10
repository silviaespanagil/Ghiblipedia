//COMPONENTS
import FilterSeasons from "./M-S- FilterSeason";
import SeasonList from "./M-S - SeasonList";

const Seasons = (props) => {
  return (
    <>
      <FilterSeasons />
      <SeasonList seasons={props.seasons} />
    </>
  );
};
export default Seasons;
