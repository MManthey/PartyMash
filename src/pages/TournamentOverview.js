import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import GridOn from "@material-ui/icons/GridOn";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Games from "../components/Games";
import NavBar from "../components/NavBar";

class TournamentOverview extends React.Component {
  render() {
    return (
      <>
        <NavBar logo={true} text="# 4345" rightSide="menu" />
        <Paper square>
          <Tabs
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<VideogameAsset />} label="Spiele" />
            <Tab icon={<GridOn />} label="Tabelle" />
            <Tab icon={<FormatListNumbered />} label="Rangliste" />
          </Tabs>
        </Paper>
        <Games />
      </>
    );
  }
}

export default TournamentOverview;
