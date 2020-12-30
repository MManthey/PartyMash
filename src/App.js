import React from "react";
import Home from "./pages/Home";
import TournamentOverview from "./pages/TournamentOverview";
import TeamZuordnenPage from "./pages/TeamZuordnenPage";
import CreateRoundTournament from "./pages/CreateRoundTournament";
import CreateKnockoutTournament from "./pages/CreateKnockoutTournament";
import TournamentPreview from "./pages/TournamentPreview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalSettings from "./pages/GlobalSettings";
import { useState } from "react";
import ToggleSwitch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: "#0E4DA4",
        background: "#0E4DA4",
      },
      secondary: {
        main: "#1BB55C",
        contrastText: "#fff",
      },
      selected: {
        background: "#0E4DA4",
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif", "Roboto"].join(","),
      button: {
        fontSize: "18.8px",
        fontWeight: "600",
      },
      h1: {
        fontSize: "20px",
        fontWeight: "600",
      },
      body1: {
        fontWeight: "400",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 15,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggleSwitch checked={darkState} onChange={handleThemeChange} /> Dark
      Mode
      {/** TODO wie state in subcomponente durch router hindurch */}
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/globalSettings" component={GlobalSettings} />
            <Route path="/tournamentOverview" component={TournamentOverview} />
            <Route path="/teamZuordnen" component={TeamZuordnenPage} />
            <Route path="/tournamentPreview" component={TournamentPreview} />
            <Route
              path="/createRoundTournament"
              component={CreateRoundTournament}
            />
            <Route
              path="/createKnockoutTournament"
              component={CreateKnockoutTournament}
            />
            {/* zum Testen */}
            <Route path="/overview" component={TournamentOverview} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
