import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Button from '@material-ui/core/Button';
function App() {
  return (
    <div>
      <NavBar />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
    </div>
  );
}

export default App;
