import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Themed App</h1>
      <button onClick={toggleTheme}>toggleTheme</button>
      <p>Current Theme : {theme}</p>
    </div>
  );
};

export default Header;
