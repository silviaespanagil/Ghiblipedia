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
  const [body, setBody] = useState(true);

  //HANDLERS
  const handleDarkMode = () => {
    setMode(!mode);
    setBody(!body);
    setBackground();
  };

  function setBackground() {
    let mybody = document.getElementsByTagName("body")[0];
    if (body === true) {
      mybody.style.backgroundColor = "#090126";
    } else {
      mybody.style.backgroundColor = "#efecce";
    }
  }

  const isDark = mode === false;

  return (
    <>
      <div ref={refScrollUp}> </div>
      <Header handleDarkMode={handleDarkMode} isDark={isDark} />
      <Main
        refScrollUp={refScrollUp}
        handleDarkMode={handleDarkMode}
        isDark={isDark}
      />
    </>
  );
}

export default App;
