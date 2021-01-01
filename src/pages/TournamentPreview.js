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
      linkTo:"/createKnockoutTournament",
      infoText: "Das K.-o.-System (von englisch knockout; etwa: „außer Gefecht setzen“) im engeren Sinne ist eine Turnierform, bei der in jeder Spielrunde jeweils zwei Teilnehmer aufeinandertreffen und der Verlierer ausscheidet, bis schließlich im Finale der Sieger des Turniers ermittelt wird. Zweifaches ausscheiden einstellbar.",
      pros: [
        {id: 1, value: "Spannend, da jedes Match entscheidet."},
        {id: 2, value: "Geeigent für viele Teilnehmer"},
      ],
      cons: [
        {id: 10, value: "Wenig Turniererfahrung"},
        {id: 11, value: "Schnellea ausscheiden möglich"},
        {id: 12, value: "Für viele Teilnehmer wird kein Rang ermittelt"},
      ]
    },
    {
      tournamentType:"round",
      name:"Rundenturnier",
      src:"../images/runden-turnier.jpg",
      linkTo:"/createRoundTournament",
      infoText: "Als „Rundenturnier“ (auch „Jeder gegen jeden“, englisch Round Robin oder Liga-System) wird eine Turnierform bezeichnet, bei der jeder Turnierteilnehmer gleich oft gegen alle anderen Turnierteilnehmer antritt.",
      pros: [
        {id: 1, value: "Dauert länger und ist genauer"},
        {id: 2, value: "Sieger ist tatsächlich der Beste"},
      ],
      cons: [
        {id: 10, value: "Viele Spiele notwendig"},
        {id: 11, value: "Schnelles ausscheiden möglich"},
        {id: 12, value: "Für viele Teilnehmer wird kein Rang ermittelt"},
      ]
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
                infoText={ttype.infoText}
                pros={ttype.pros}
                cons={ttype.cons}
              />
            )
          )}
        </Grid>
      </>
    )
}

export default TournamentPreview;
