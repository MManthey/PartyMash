import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import InfoIconOutlined from "@material-ui/icons/Info";
//import { useHistory } from "react-router-dom";
import TournamentInfoOverlay from "./TournamentInfoOverlay";
import { Link } from "react-router-dom"

import runden_turnierPNG from "../images/runden_turnier.png";
import ko_turnierPNG from "../images/ko_turnier.png";


function TournamentType(props) {

  //onst images = require.context("../../src/pages", true)

  //let dynamicImage = images(props.src)

  const [modalVisible, setModal] = React.useState(false);

  const handleOpen = () => {
    setModal(true)
  };

  const handleClose = () => {
    setModal(false);
  };

  const gridItemStyle = {
    //width:"100%",
    // height: "auto",
    // marginTop: "20px",
    // wrap: "nowrap",
  };
  const infoIconStyle = {
    position: "absolute",
    right: "10px",
    top: "5px",
    color: "black",
  };

  const wrapperStyle = {
    position: "relative",
  };
  return (
    <Grid
      item
      md={6}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} style={gridItemStyle}>
        <div
          style={wrapperStyle}
          onMouseDown={handleOpen}
          >
          <InfoIconOutlined fontSize="large" style={infoIconStyle} />
          <Box m={6}>
          <img
            name={props.tournamentType}
            alt={props.name}
            width="100%"
            src={props.tournamentType === "ko" ? ko_turnierPNG : runden_turnierPNG} //haky, weil import und weitergabe nicht klappt
          />
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} style={gridItemStyle}>
        <Button
          name={props.tournamentType}
          variant="contained"
          color="primary"          
          component={Link}
          to={props.linkTo}
        >
          {props.name}
        </Button>
      </Grid>
      <TournamentInfoOverlay
        open={modalVisible}
        onClose={handleClose}
        title={props.name}
        infoText={props.infoText}
        pros={props.pros}
        cons={props.cons}
      />
    </Grid>
  );
}

export default TournamentType;
