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
import logo from "../images/partymash_logo_small.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  middleNavBar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    display: "block",
    width: "24px",
    height: "24px",
    paddingRight: "16px",
  },
  link: {
    textDecoration: "none",
    display: "block",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  function menuItems(items) {
    return items.map((item) => (
      <MenuItem component={Link} to={item.path} onClick={handleClose}>
        {item.name}
      </MenuItem>
    ));
  }

  function renderRightNavBar(props) {
    switch (props.rightSide) {
      case "info":
        return (
          <IconButton edge="end" color="inherit">
            <InfoOutlinedIcon />
          </IconButton>
        );
      case "menu":
        return (
          <>
            <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems(props.menuItems)}
            </Menu>
          </>
        );
      default:
        return null;
    }
  }

  function renderMiddleNavBar(props) {
    return (
      <div className={classes.middleNavBar}>
        {props.logo && <img src={logo} alt="logo" className={classes.logo} />}
        {props.text && (
          <Typography variant="h6" align="center">
            {props.text}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {renderLeftNavBar(props.leftSide)}
          {renderMiddleNavBar(props)}
          {renderRightNavBar(props)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
