import React from "react";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    flexGrow: 1,
    height: 150,
  },
}));

function Home() {
  const classes = useStyles();
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to="/"
          >
            <Typography variant="h6">Code eingeben</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to="/tournamentPreview"
          >
            <Typography variant="h6">Turnier Erstellen</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
