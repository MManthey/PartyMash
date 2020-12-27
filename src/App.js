import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import TournamentOverview from './components/TournamentOverview';
import CreateTournament from './components/CreateTournament'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/tournamentOverview" component={TournamentOverview}/>
            <Route path="/createTournament" component={CreateTournament}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
