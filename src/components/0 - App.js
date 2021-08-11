import { useRef } from "react";

//COMPONENTS
import Header from "./1-Header";
import Main from "./2-Main";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  //Ref for the ScrollUp action
  const refScrollUp = useRef();

  return (
    <>
      <div ref={refScrollUp}> </div>
      <Header />
      <Main refScrollUp={refScrollUp} />
    </>
  );
}

export default App;
