const SearchArea = (props) => {
  //LISTEN SEARCH INPUT
  const handleSearchBox = (e) => {
    props.handleFilter({
      searchValue: e.target.value.toLowerCase(),
      key: "name",
    });
  };

  const preventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="searchArea">
      <form className="searchArea__form" onSubmit={preventDefault}>
        <label htmlFor="searchBar" className="searchArea__form--search">
          <input
            id="search"
            type="search"
            placeholder="Search your favorite Queen"
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
