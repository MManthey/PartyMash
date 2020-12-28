import React from "react";
import NavBar from "../components/NavBar";

function TournamentOverview() {
  return (
    <div>
      <NavBar
        leftSide="arrow"
        text="Rundenturnier Erstellen"
        rightSide="info"
      />
      CreateTournament
    </div>
  );
}

export default TournamentOverview;
