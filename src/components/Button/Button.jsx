import React from "react";
import "./button.css";
const Button = ({ width, height, children }) => {
  return (
    <button
      className="generic-button"
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
