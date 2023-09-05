import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import SubComponent from "./SubComponent";
const Mian = () => {
  const { theme, data, setData } = useContext(ThemeContext);
  return (
    <div>
      <h1>Main Component</h1>
      <div className={`main-content ${theme}`}>
        <SubComponent />
        <button
          onClick={() => {
            setData(!data);
          }}
        >
          Change Data From Comp1
        </button>
      </div>
    </div>
  );
};

export default Mian;
