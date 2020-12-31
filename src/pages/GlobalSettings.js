import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import SettingsElement from "../components/SettingsElement";
import Switch from "@material-ui/core/Switch";

function renderSettings(items) {
  return items.map((item) => (
    <Grid item>
      <SettingsElement text={item.text} controlElement={item.controlElement} />
    </Grid>
  ));
}

function GlobalSettings(props) {
  const settingElements = [{ text: "Dark-Mode", controlElement: "switch" }];
  return (
    <div>
      <NavBar leftSide="arrow" text="Party Mash" logo={true} />
      <Grid
        style={{ marginTop: 16, marginBottom: 16 }}
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        spacing={6}
      >
        <Grid item>
          <SettingsElement text="Dark-Mode" />
          <Switch
            checked={props.checked}
            onChange={props.onChange}
            color="primary"
            name="Dark-Mode"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GlobalSettings;
