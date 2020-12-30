import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import GridOn from "@material-ui/icons/GridOn";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Games from "../components/Games";
import Table from "../components/Table";
import Ranking from "../components/Ranking";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";

//Die Seite soll auch auf dem Desktop funktionieren/nicht kauputt aussehen, das mit MaxWidth ist glaube ich keine gute Idee
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const testGame = {
  "mode" : "K.O.",
  "settings" : {
    "allowTeams" : true,
    "maxTeamSize" : 2,
    "isDoubleElim" : false,
    "numOfParallelGames" : 3,
  },
  "teams" : [
    ["John Doe", "Max Mustermann"]
    ["Klaus Kleber"]
  ]
};

const testGames = [
  {
    "p1": "Team 1",
    "p2": "Team 2",
    "running" : true
  },
  {
    "p1": "Team 3",
    "p2": "Team 4",
    "running" : true
  },
  {
    "p1": "Team 5",
    "p2": "Team 6",
    "running" : true
  },
  {
    "p1": "Team 7",
    "p2": "Team 8",
    "running" : false
  },
  {
    "p1": "Team 9",
    "p2": "Team 10",
    "running" : false
  },
  {
    "p1": "Team 11",
    "p2": "Team 12",
    "running" : false
  },
];

const testNotifications = [
  {
    "message" : "In 3 Spielen spielst Du!",
    "open" : true,
  }
]

function TournamentOverview() {

  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const [games, setGames] = React.useState(testGames);

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <>
      <NavBar logo={true} text="#45583" rightSide="menu" />
      <Paper square className={classes.root}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<VideogameAsset />} label="Spiele" />
          <Tab icon={<GridOn />} label="Tabelle" />
          <Tab icon={<FormatListNumbered />} label="Rangliste" />
        </Tabs>
      </Paper>
      {tabIndex === 0 ? <Games games={games} notifications={testNotifications} /> : tabIndex === 1 ? <Table /> : <Ranking />}
    </>
  );
}

export default TournamentOverview;
