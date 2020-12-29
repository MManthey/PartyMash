import React from "react";
import NavBar from "../components/NavBar";
function Home() {
  const navBarMenuItems = [{ name: "Einstellungen", path: "/globalSettings" }];
  return (
    //TODO: Navigate Back option
    <div>
      <NavBar
        leftSide="avatar"
        text="Party Mash"
        logo={true}
        rightSide="menu"
        menuItems={navBarMenuItems}
      />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
