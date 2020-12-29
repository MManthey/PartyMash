import React from "react";
import { Button, Grid } from "@material-ui/core";
import InfoIconOutlined from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import ModalOverlay from "./ModalOverlay";
import { Link } from "react-router-dom";

function TournamentType(props) {
  const history = useHistory();

  const [modalKO, setModalKO] = React.useState(false);
  const [modalRound, setModalRound] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState("");

  const handleOpen = (event) => {
    setModalInfo(event.currentTarget.name);
    console.log(modalKO);
    console.log(modalRound);

    event.currentTarget.name === "ko" ? setModalKO(true) : setModalRound(true);
    console.log("open moadl");
    console.log(event.currentTarget.name);
    console.log(modalKO);
    console.log(modalRound);
  };

  const handleClose = () => {
    setModalKO(false);
    setModalRound(false);
    console.log("hadnle clode");
  };

  const handleClick = (event) => {
    if (event.currentTarget.type === "button") {
      //Es gibt jetzt 2 verschieden createTournament Seiten
      //Hab das mit dem Navigieren bis jetzt ohne history push gemacht sondern nur mit
      //component={Link} und to=... wo ist der unterschied/vorteil? -Michi
      history.push("/createRoundTournament", {
        type: event.currentTarget.name,
      });
    } else {
      //image clicked
      handleOpen(event);
    }
  };

  const gridItemStyle = {
    //width:"100%",
    // height: "auto",
    marginTop: "20px",
    wrap: "nowrap",
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
        <div style={wrapperStyle}>
          <InfoIconOutlined fontSize="large" style={infoIconStyle} />
          <img
            name={props.tournamentType}
            alt={props.name}
            width="100%"
            src="https://picsum.photos/600/400"
            onMouseDown={handleClick}
          />
        </div>
      </Grid>
      <Grid item xs={12} style={gridItemStyle}>
        <Button
          name={props.tournamentType}
          variant="contained"
          color="primary"
          onMouseDown={handleClick}
          //So hätte ich gedacht dass die verlinkung funktioniert
          //   component={Link}
          //   to="/createKnockoutTournament"
        >
          {props.name}
        </Button>
      </Grid>
      <ModalOverlay show={modalKO} exit={handleClose} info={modalInfo} />
    </Grid>
  );
}

export default TournamentType;
