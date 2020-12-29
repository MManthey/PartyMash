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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0E4DA4",
      background: "#0E4DA4",
    },
    secondary: {
      main: "#1BB55C",
    },
    selected: {
      background: "#0E4DA4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
