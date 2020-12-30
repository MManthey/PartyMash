import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

function ProConItem(props) {

    const useStyles = makeStyles((theme) => ({
        proconitem: {
            fontSize: 10
        }
      }));


    const classes = useStyles();


  return (
    <>
        <Grid item>
          <Typography
            className={classes.proconitem}
          >{props.textDecoration} {props.value}</Typography>
        </Grid>
    </>
  );
}

export default ProConItem;
