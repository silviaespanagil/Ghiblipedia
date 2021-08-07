import axios from "axios";
import { useEffect, useState } from "react";

const QueensList = () => {
  //STATES
  const [queens, setQueens] = useState(null);

  //API GET ALL QUEENS
  useEffect(() => {
    const queensURL = "http://www.nokeynoshade.party/api/queens/all";
    axios.get(queensURL).then((res) => {
      setQueens(res.data);
    });
  }, []);

  if (!queens) return null;

  //HANDLERS

  //RENDER QUEENS

  const allQueens = queens.map((queen) => {
    return (
      <article key={queen.id} className="queensList__card">
        <img
          src={queen.image_url}
          alt={`"Portrait of "${queen.name}`}
          className="queensList__card--img"
        />
        <h2 className="queensList__card--name">{queen.name}</h2>
      </article>
    );
  });

  return <section className="queensList">{allQueens}</section>;
};

export default QueensList;
