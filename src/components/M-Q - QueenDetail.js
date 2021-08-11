import { Link } from "react-router-dom";

const QueenDetail = (props) => {
  const detailCard = (
    <section className="queenDetail">
      <h2 className="queenDetail__name">{props.queen.name}</h2>
      <article key={props.queen.id} className="queenDetail__article">
        <img
          src={props.queen.image_url}
          alt={`Portrait of ${props.queen.name}`}
          className="queenDetail__img"
        />

        <q className="queenDetail__quote">{props.queen.quote}</q>
        <Link to="/queens" className="dontExist__back">
          Go back
        </Link>
      </article>
    </section>
  );
  const winnerIcon = (
    <span title="Season Winner" alt="Crown emoji" className="queenDetail__icon">
      👑
    </span>
  );
  if (props.queen.winner === true) {
    return (
      <section className="queenDetail">
        <h2 className="queenDetail__name">
          {props.queen.name} {winnerIcon}{" "}
        </h2>
        <article key={props.queen.id} className="queenDetail__article">
          <img
            src={props.queen.image_url}
            alt={`Portrait of ${props.queen.name}`}
            className="queenDetail__img"
          />
          <q className="queenDetail__quote">{props.queen.quote}</q>
        </article>
        <Link to="/queens" className="dontExist__back">
          Go back
        </Link>
      </section>
    );
  } else {
    return detailCard;
  }
};
export default QueenDetail;
