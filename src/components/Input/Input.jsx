import React from "react";
import "./input.css";
const Input = ({ id, children, width, height, onChange, value }) => {
  return (
    <div className="generic-input-area" style={{ width: `${width}` }}>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        style={{ height: `${height}` }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
