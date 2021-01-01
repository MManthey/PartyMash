import React from "react";
import { Button} from "@material-ui/core";
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function QROverlay(props) {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: "0 auto"
        },
      }));

  const dialogStyle = {
    textAlign: "center"
  }
  const classes = useStyles();

  return (
    <Dialog
        aria-labelledby="simple-dialog-title"
        open={props.open}
        onClose={props.close}
        style={dialogStyle}>

            <DialogTitle id="simple-dialog-title">Lobby erstellt!</DialogTitle>
            <p style={{padding: "20px"}}>Teile den Code mit allen Teilnehmern</p>
            <p>Turniercode:</p>
            <Typography variant="h1">45583</Typography>
            <img style={{paddingLeft: "25%", paddingRight:"25%"}} src="qr.png"></img>

            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="medium"
              //component={Link}
              //to="/tournamentPreview"
            >
              <Typography noWrap={true} variant="button">
                Teilen
              </Typography>
            </Button>

    </Dialog>
  );
}

export default QROverlay;
