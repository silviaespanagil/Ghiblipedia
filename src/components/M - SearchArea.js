const SearchArea = (props) => {
  return (
    <section className="searchArea">
      <form className="searchArea__form">
        <label for="searchBar" className="searchArea__form--search">
          <input
            id="search"
            type="search"
            placeholder="Search a queen or season"
            className="searchArea__form--search-input"
            onChange={props.userSearch}
          />
        </label>
      </form>
    </section>
  );
};

export default SearchArea;
