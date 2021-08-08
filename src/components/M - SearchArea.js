const SearchArea = (props) => {
  //LISTEN SEARCH INPUT
  const handleSearchBox = (e) => {
    props.handleFilter({
      searchValue: e.target.value.toLowerCase(),
      key: "name",
    });
  };
  return (
    <section className="searchArea">
      <form className="searchArea__form">
        <label for="searchBar" className="searchArea__form--search">
          <input
            id="search"
            type="search"
            placeholder="Search a queen or season"
            className="searchArea__form--search-input"
            value={props.userSearch}
            onChange={handleSearchBox}
          />
        </label>
      </form>
    </section>
  );
};

export default SearchArea;
