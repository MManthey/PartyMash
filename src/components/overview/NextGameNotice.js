import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function buildNotification(count) {
  if (count > 0) {
    return <Alert
      variant="filled"
      severity="warning"
    >
      {`In ${count} Spielen bist du dran!`}
    </Alert>
  }
  else {
    return < Alert
      variant="filled"
      severity="success"
      component={Link}
      to="/currentGame"
      action={
        <ArrowForwardIcon />
      }
    >
      {`Spiel beitreten!`}
    </Alert >
  }
}

function NextGameNotice({ nextGameNotice }) {
  return (
    buildNotification(nextGameNotice.count)
  );
}

export default NextGameNotice;
