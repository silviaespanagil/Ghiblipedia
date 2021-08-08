//IMAGES
import NoResults from "../images/HeidiNoResults.gif";

const NoQueen = (props) => {
  return (
    <section>
      <p>
        There is no Queen called <span>{props.userSearch}</span>
      </p>
      <img
        src={NoResults}
        alt="Gif of Heidi n Closet looking around confused"
      />
    </section>
  );
};

export default NoQueen;
