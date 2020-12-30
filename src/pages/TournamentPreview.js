import React from "react";
import TournamnetType from "../components/TournamentType";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";


/*
    Besteht aus:
   |- Navbar
   |- TournamentType
        |- TournamentCoverImage
            |- Image
            |- InfoIcon
            |- Modal
                |- HeaderImage
                |- Infotext
                |- ProsList
                |- ConsList
        |- Button
    |- TournamentType

*/
function TournamentPreview(props) {
  const ttypes = [
    {
      tournamentType:"ko",
      name:"K.O. Turnier",
      src:"../images/ko-turnier.jpg",
      linkTo:"/createKnockoutTournament"
    },
    {
      tournamentType:"round",
      name:"Rundenturnier",
      src:"../images/runden-turnier.jpg",
      linkTo:"/createRoundTournament"
    }
  ]

    return (
      <>
        <NavBar
          leftSide="arrow"
          text="Wähle einen Spielmodus"
          rightSide="menu"
        />
        <Grid container direction="row" spacing={3} justify="center">
          {ttypes.map(
            (ttype, index) => (
              <TournamnetType
                key={index}
                tournamentType={ttype.tournamentType}
                name={ttype.name}
                src={ttype.src}
                linkTo={ttype.linkTo}
              />
            )
          )}
        </Grid>
      </>
    )
}

export default TournamentPreview;
