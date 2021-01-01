import React from "react";
import TeamRow from "../components/teams/TeamRow";
import NavBar from "../components/NavBar";
import BottomDrawer from "../components/drawer/BottomDrawer";

function TeamZuordnenPage() {
  const pageStyle = {
    position: "relative",
    padding: "20px",
    height: "100%",
  };
  const rowStyle = {
    paddingBottom: "20px",
  };

  const fullTeam = [
    "/userImages/avatar4.jpg",
    "/userImages/avatar5.jpg",
    "/userImages/avatar6.jpg"
  ]

  const notFullTeam = [
    "/userImages/avatar7.jpg",
    "/userImages/avatar8.jpg"
  ]
  const emptyTeam = [

  ]

  //TODO Add footer
  return (
    <>
      <NavBar leftSide="arrow" text="Team Zuordnung" rightSide="menu" />
      <div style={pageStyle}>
        <div style={rowStyle}>
          <TeamRow players={emptyTeam}></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow players={notFullTeam}></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow players={fullTeam}></TeamRow>
        </div>
      </div>
      <BottomDrawer></BottomDrawer>
    </>
  );
}

export default TeamZuordnenPage;
