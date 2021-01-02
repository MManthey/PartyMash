import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GameTable from './GameTable';
import NextGameNotice from "./NextGameNotice";

const useStyles = makeStyles({
  root: {
    padding: "25px",
  },
  alerts: {
    paddingBottom: "30px",
  },
});

function Games({ games, nextGameNotice }) {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.alerts}>
        <NextGameNotice nextGameNotice={nextGameNotice} />
      </div>
      <Typography variant="h6" gutterBottom>
        Laufende Spiele
      </Typography>
      <GameTable games={games.filter(game => game.running)} />
      <Typography variant="h6" gutterBottom >
        Anstehende Spiele
      </Typography>
      <GameTable games={games.filter(game => !game.running)} />
    </Container>
  );
};

export default Games;
