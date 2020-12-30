import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SettingsElement from "../components/SettingsElement";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
    width: 300,
  },
  root: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  grid: {
    // marginTop: 16,
    // marginBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
  },
}));

function renderSettings(items) {
  return items.map((item) => (
    <Grid item>
      <SettingsElement
        id={item.id}
        text={item.text}
        controlElement={item.controlElement}
        maxValue={item.maxValue}
        minValue={item.minValue}
      />
    </Grid>
  ));
}

function CreateRoundTournament() {
  const classes = useStyles();

  const settingElementsTop = [
    {
      id: 1,
      text: "Anzahl Turnierrunden",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
    { id: 2, text: "Teams erlauben", controlElement: "switch" },
    { id: 3, text: "Teamgröße beschränken", controlElement: "switch" },
    {
      id: 4,
      text: "Max. Teamgröße",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
  ];

  const settingElementsMiddle = [
    {
      id: 100,
      text: "Punkte für Sieg",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
    {
      id: 101,
      text: "Punkte für Unentschieden",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
    {
      id: 102,
      text: "Punkte für Niederlage",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
  ];

  const settingElementsBottom = [
    {
      id: 103,
      text: "Anzahl der Parallelen Spiele",
      controlElement: "incrementer",
      maxValue: 10,
      minValue: 0,
    },
  ];

  return (
    <div>
      <NavBar
        leftSide="arrow"
        text="Rundenturnier Erstellen"
        rightSide="info"
      />
      {/**Spacing lieber mit den Material UI eingabuten sachen  https://material-ui.com/system/spacing/*/}
      <Box mx={2} my={2}>
        {/**https://stackoverflow.com/questions/45519275/grid-in-material-ui-causes-horizontal-scroll-react*/}
        <Grid
          // className={classes.grid}
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={4}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          {renderSettings(settingElementsTop)}
          <Divider variant="middle" />
          {renderSettings(settingElementsMiddle)}
          <Divider variant="middle" />
          {renderSettings(settingElementsBottom)}
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Box mt={4}>
              <Button
                className={classes.button}
                color="secondary"
                variant="contained"
                size="large"
                component={Link}
                to="/teamZuordnen"
              >
                <Typography variant="button">Lobby erstellen</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CreateRoundTournament;
