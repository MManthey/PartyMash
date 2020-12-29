import React from "react";
import NavBar from "../components/NavBar";
function GlobalSettings() {
  return (
    <div>
      <NavBar leftSide="arrow" text="Party Mash" logo={true} />
      <h1>Global Settings</h1>
      <p>Dark-Mode: TOGGLE</p>
    </div>
  );
}

export default GlobalSettings;
