import React from "react";
import NavBar from "../components/NavBar";
function Home() {
  return (
    <div>
      <NavBar
        leftSide="avatar"
        text="Party Mash"
        logo={true}
        rightSide="menu"
      />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
