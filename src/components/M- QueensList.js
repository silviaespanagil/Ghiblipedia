//COMPONENTS

import NoQueen from "./M - NoQueen";

const QueensList = (props) => {
  //RENDER QUEENS

  if (props.queens.length === 0) {
    return (
      <NoQueen userSearch={props.userSearch} resetSearch={props.resetSearch} />
    );
  }

  const allQueens = props.queens.map((queen) => {
    return (
      <article key={queen.id} className="queensList__card">
        <img
          src={queen.image_url}
          alt={`Portrait of ${queen.name}`}
          className="queensList__card--img"
        />
        <h2 className="queensList__card--name">{queen.name}</h2>
      </article>
    );
  });

  return <section className="queensList">{allQueens}</section>;
};

export default QueensList;
