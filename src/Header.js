import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeClick }) {
  return (
    <header>
      <button onClick={handleLoggedInClick}>{loggedIn ? "Log Out" : "Log In"}</button>
      <button onClick={handleFontSizeClick}>Increase Font Size</button>
    </header>
  );
}

export default Header;
