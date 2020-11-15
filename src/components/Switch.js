import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <label className="switch-label">
      <input type="checkbox" />
      <span className="switch-slider" />
    </label>
  );
};

export default Switch;
