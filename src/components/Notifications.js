import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  alerts: {
    paddingBottom: "30px",
  },
});

function Notifications({ notifications }) {
  const classes = useStyles();

  return (
    <div className={classes.alerts}>
      {notifications.map((notification) => (
        <Alert variant="filled" severity="success">
          {notification.message}
        </Alert>
      ))}
    </div>
  );
}

export default Notifications;
