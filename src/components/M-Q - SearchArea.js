//COMPONENTS

import Rupedia from "./M- Rupedia";

const SearchArea = (props) => {
  //LISTEN SEARCH INPUT
  const handleSearchBox = (e) => {
    props.handleFilterQueen({
      searchValue: e.target.value.toLowerCase(),
      key: "name",
    });
  };

  const preventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="searchArea">
      <Rupedia />
      <form className="searchArea__form" onSubmit={preventDefault}>
        <label htmlFor="searchBar" className="searchArea__form--search">
          <input
            id="search"
            type="search"
            placeholder="Search a queen"
            className="searchArea__form--search-input"
            onChange={handleSearchBox}
          />
        </label>
      </form>
    </section>
  );
};

export default SearchArea;
