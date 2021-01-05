import React from "react";
import { Button} from "@material-ui/core";
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from '@material-ui/icons/Share'

function QROverlay(props) {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: "0 auto"
        },
      }));

  const dialogStyle = {
    textAlign: "center"
  }

  const imageStyle = {
    paddingLeft: "35%",
    paddingRight: "35%",
    paddingTop: "5%",
    paddingBottom: "10%"
  }

  const buttonStyle = {
    marginBottom : "10%"
  }

  const classes = useStyles();

  return (
    <Dialog
        aria-labelledby="simple-dialog-title"
        open={props.open}
        onClose={props.close}
        style={dialogStyle}>

            <Typography style={{paddingTop: "15%"}} variant="h1">Lobby erstellt!</Typography>
            <p style={{padding: "10px"}}>Teile den Code mit allen Teilnehmern</p>
            <p>Turniercode:</p>
            <Typography variant="h1">45583</Typography>
            <img style={imageStyle} src="qr.png"></img>

            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="medium"
              component={Link}
              to="/tournamentOverview"
              style={buttonStyle}
            >
              
              <Typography noWrap={false} variant="button">
                Teilen
              </Typography>
              <ShareIcon style={{marginLeft: "10%"}}></ShareIcon>
            </Button>

    </Dialog>
  );
}

export default QROverlay;
