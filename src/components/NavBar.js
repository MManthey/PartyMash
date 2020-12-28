import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  function renderLeftNavBar(param) {
    switch (param) {
      case "arrow":
        return (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <ArrowBackIosIcon />
          </IconButton>
        );
      case "avatar":
        return (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        );
      default:
        return null;
    }
  }

  {
    /**TODO immer rechts */
  }
  function renderRightNavBar(param) {
    switch (param) {
      case "info":
        return (
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <InfoOutlinedIcon />
          </IconButton>
        );
      case "menu":
        return (
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertOutlinedIcon />
          </IconButton>
        );
      default:
        return null;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {renderLeftNavBar(props.leftSide)}
          {/**TODO Icon Option */}
          <div>
            {props.text && (
              <Typography variant="h6" className={classes.title}>
                {" "}
                {props.text}{" "}
              </Typography>
            )}
          </div>

          {renderRightNavBar(props.rightSide)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
