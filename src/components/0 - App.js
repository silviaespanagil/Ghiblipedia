import { useRef, useState } from "react";

//COMPONENTS
import Header from "./1-Header";
import Main from "./2-Main";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  //REF FOR TOP BUTTON SCROLL
  const refScrollUp = useRef();

  const [mode, setMode] = useState(false);

  const handleDarkMode = () => {
    setMode(!mode);
  };
  console.log(mode);
  const isDark = mode === false;

  return (
    <>
      <div ref={refScrollUp}> </div>
      <Header />
      <Main refScrollUp={refScrollUp} />
    </>
  );
}

export default App;
