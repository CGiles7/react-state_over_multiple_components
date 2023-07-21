import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12);
  const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeClick={increaseFontSize}/>
      <Content loggedIn={loggedIn} fontSize={fontSize} text="My content."/>
    </div>
  );
}

export default App;