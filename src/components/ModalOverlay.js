import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProConItem from "./ProConItem"


function ModalOverlay(props) {

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
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>
      <p>{props.infoText}</p>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        justify="space-between"
      >
      {props.pros.map((pro) => (
        <ProConItem 
          key={pro.id}
          textDecoration="+" 
          value={pro.value} 
        >
        </ProConItem>
      ))}
    </Grid>
    <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        justify="space-between"
      >
      {props.cons.map((con) => (
        <ProConItem 
          key={con.id}
          textDecoration="-" 
          value={con.value} 
        >
        </ProConItem>
      ))}
    </Grid>
      
  </Dialog>
  );
}

export default ModalOverlay;
