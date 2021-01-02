import React from "react";
import NavBar from "../components/NavBar";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function EnterResult(props){
    const containerStyle = {
        textAlign: "center",
        padding: "20%"
    }

    let visibility = "none";
    if(props.visible){
        visibility = "block";
    }
    //
    visibility = "block";
    //
    const inputStyle = {
        display: visibility,
        marginTop: "12%",
        marginBottom: "16%"
    }

    const buttonLoseStyle = {
        main: "#E74C3C",
        background: "#E74C3C",
        color: "#fff",
        contrastText: "#fff",
        marginLeft: "2%"
        
    }

    return (
        <>
        <NavBar leftSide="arrow" text="Ergebnis eintragen" rightSide="menu" />
    <div style={containerStyle}>
        
        <Typography variant="h1">Wie ist das Match gegen Team Rocket ausgegangen?</Typography>
        <TextField style={inputStyle} id="outlined-basic" label="Ergebnis" variant="outlined" />
        <Button 
        color="secondary"
        variant="contained"
        component={Link}
        to="/tournamentOverview">
            <Typography noWrap={true} variant="button">
                Gewonnen
              </Typography>
        </Button>
        <Button 
            style = {buttonLoseStyle}
            component={Link}
            to="/tournamentOverview">
            <Typography noWrap={true} variant="button">
                Verloren
              </Typography>
        </Button>
    </div>
    </>)
}

export default EnterResult;