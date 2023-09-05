import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
const SubComponent = () => {
  const { theme, data } = useContext(ThemeContext);
  {
    console.log("SubComponent Data", data);
  }
  return (
    <div className={`sub-component ${theme}`}>
      <p>Sub Component</p>
      {/* <button
        onClick={() => {
          setData(true);
        }}
      >
        Change Data
      </button> */}
      <p>Changed Data:{data ? "true" : "false"}</p>
    </div>
  );
};

export default SubComponent;
