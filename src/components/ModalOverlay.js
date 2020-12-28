import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

function ModalOverlay(props) {
  const hello = () => {
    console.log("hello");
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      className={classes.modal}
      open={props.show}
      onClose={props.handleClose}
    >
      <DialogTitle id="simple-dialog-title">{props.info}</DialogTitle>
      <button onClick={hello}>close</button>
    </Dialog>
  );
}

export default ModalOverlay;
