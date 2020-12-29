import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GameTable from './GameTable';
import Notifications from './Notifications';

const useStyles = makeStyles({
  root: {
    padding: "30px",
  },
});

function Games({ games, notifications }) {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Notifications notifications={notifications} />
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
