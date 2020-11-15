import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ roundet = false, isToggled, onToggle }) => {
  const sliderCX = cx("switch-slider", {
    roundet: roundet
  });

  return (
    <label className="switch-label">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCX} />
    </label>
  );
};

export default Switch;
