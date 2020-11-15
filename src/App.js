import React, { useState } from "react";
import "./styles.css";
import Switch from "./components/Switch";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>toggle button</h2>
      <Switch
        roundet={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}
