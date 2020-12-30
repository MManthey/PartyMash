import React from "react";
import { Button, Grid } from "@material-ui/core";
import InfoIconOutlined from "@material-ui/icons/Info";
//import { useHistory } from "react-router-dom";
import ModalOverlay from "./ModalOverlay";
import { Link } from "react-router-dom";

function TournamentType(props) {

  const [modalVisible, setModal] = React.useState(false);

  const handleOpen = () => {
    setModal(true)
  };

  const handleClose = () => {
    setModal(false);
    console.log("CLOSE")
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
    color: "white",
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
          <img
            name={props.tournamentType}
            alt={props.name}
            width="100%"
            src="https://picsum.photos/600/400"            
          />
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
      <ModalOverlay
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
