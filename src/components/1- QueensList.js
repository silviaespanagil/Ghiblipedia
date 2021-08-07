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
      <article key={queen.id}>
        <img src={queen.image_url} alt={`"Portrait of "${queen.name}`} />
        <h2>{queen.name}</h2>
        <p>{queen.quote}</p>
      </article>
    );
  });

  return <section>{allQueens}</section>;
};

export default QueensList;
