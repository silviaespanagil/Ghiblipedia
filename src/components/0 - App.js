import { useRef, useState } from "react";

//COMPONENTS
import Header from "./1-Header";
import Main from "./2-Main";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  //REF FOR TOP BUTTON SCROLL
  const refScrollUp = useRef();

  // STATES
  const [mode, setMode] = useState(false);

  //HANDLERS

  const handleDarkMode = () => {
    setMode(!mode);
  };
  const isDark = mode === false;

  return (
    <>
      <div ref={refScrollUp}> </div>
      <Header handleDarkMode={handleDarkMode} isDark={isDark} />
      <Main refScrollUp={refScrollUp} />
    </>
  );
}

export default App;
