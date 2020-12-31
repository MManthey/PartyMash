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
  //TODO Add footer
  return (
    <>
      <NavBar leftSide="arrow" text="Team Zuordnung" rightSide="menu" />
      <div style={pageStyle}>
        <div style={rowStyle}>
          <TeamRow status="new"></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow status="waiting"></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow status="ready"></TeamRow>
        </div>
      </div>
      <BottomDrawer></BottomDrawer>
    </>
  );
}

export default TeamZuordnenPage;
