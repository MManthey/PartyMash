import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import TournamentOverview from "./pages/TournamentOverview";
import TeamZuordnenPage from "./pages/TeamZuordnenPage";
import CreateTournament from "./pages/CreateTournament";
import TournamentPreview from "./pages/TournamentPreview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tournamentOverview" component={TournamentOverview} />
          <Route path="/teamZuordnen" component={TeamZuordnenPage} />
          <Route path="/tournamentPreview" component={TournamentPreview} />
          <Route path="/createTournament" component={CreateTournament} />
          {/* zum Testen */}
          <Route path="/overview" component={TournamentOverview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
