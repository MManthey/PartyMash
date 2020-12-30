import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SettingsElement from "../components/SettingsElement";

const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
    width: 300,
  },
  root: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

function renderSettings(items) {
  return items.map((item) => (
    <Grid item>
      <SettingsElement text={item.text} controlElement={item.controlElement} />
    </Grid>
  ));
}

function CreateRoundTournament() {
  const classes = useStyles();

  const settingElementsTop = [
    { text: "Anzahl Turnierrunden", controlElement: "incrementer" },
    { text: "Teams erlauben", controlElement: "switch" },
    { text: "Teamgröße beschränken", controlElement: "switch" },
    { text: "Max. Teamgröße", controlElement: "incrementer" },
  ];

  const settingElementsMiddle = [
    { text: "Punkte für Sieg", controlElement: "incrementer" },
    { text: "Punkte für Unentschieden", controlElement: "incrementer" },
    { text: "Punkte für Niederlage", controlElement: "incrementer" },
  ];

  const settingElementsBottom = [
    { text: "Anzahl der Parallelen Spiele", controlElement: "incrementer" },
  ];

  return (
    <div>
      <NavBar
        leftSide="arrow"
        text="Rundenturnier Erstellen"
        rightSide="info"
      />
      <Grid
        style={{ marginTop: 16, marginBottom: 16 }}
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        spacing={6}
      >
        {renderSettings(settingElementsTop)}
        <Divider variant="middle" />
        {renderSettings(settingElementsMiddle)}
        <Divider variant="middle" />
        {renderSettings(settingElementsBottom)}
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            size="large"
            component={Link}
            to="/teamZuordnen"
          >
            <Typography variant="h6">Lobby erstellen</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateRoundTournament;
