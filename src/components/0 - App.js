import axios from "axios";
import { useEffect, useState } from "react";

//STYLESHEET
import "../stylesheets/App.scss";

const queensURL = "http://www.nokeynoshade.party/api/queens/";

function App() {
  const [queens, setQueens] = useState(null);

  useEffect(() => {
    axios.get(queensURL).then((response) => {
      setQueens(response.data);
    });
  }, []);

  if (!queens) return null;
  return console.log({ queens });
}

export default App;
