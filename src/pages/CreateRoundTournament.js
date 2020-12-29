import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import GroupedButtons from "../components/GroupedButtons";

const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
  },
  root: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

function CreateRoundTournament() {
  const classes = useStyles();

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
        <Grid item>
          <Typography>Turnierrunden</Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            wrap="nowrap"
            justify="space-between"
          >
            <Grid item>
              <Typography>Teams erlauben</Typography>
            </Grid>
            <Grid item>
              <GroupedButtons />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Teamgröße beschränken</Typography>
        </Grid>
        <Grid item>
          <Typography>Max. Teamgröße</Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Typography>Punkte für Sieg</Typography>
        </Grid>
        <Grid item>
          <Typography>Punkte für Unentschieden</Typography>
        </Grid>
        <Grid item>
          <Typography>Punkte für Niederlage</Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Typography>Anzahl der Parallelen Spiele</Typography>
        </Grid>
      </Grid>
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
    </div>
  );
}

export default CreateRoundTournament;
