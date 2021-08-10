//IMAGES
import NoResults from "../images/HeidiNoResults.gif";

const NoQueen = (props) => {
  return (
    <section className="noResults">
      <p className="noResults__text">
        There is no Queen called{" "}
        <span className="noResults__text--name">{props.userSearch}</span>
      </p>
      <img
        src={NoResults}
        alt="Gif of Heidi n Closet looking around confused"
        className="noResults__img"
      />
      <a href="/" className="noResults__back" onClick={props.resetSearch}>
        Bring back my girls
      </a>
    </section>
  );
};

export default NoQueen;
