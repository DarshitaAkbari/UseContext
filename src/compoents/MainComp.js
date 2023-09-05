import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Mian from "./Mian";
import Header from "./Header";

const MainComp = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Mian />
      </div>
    </ThemeProvider>
  );
};

export default MainComp;
