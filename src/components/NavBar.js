import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navStyle = {
        color: 'white'
    };

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link style={navStyle} to='/'>
                        <Typography variant="h6" >
                            Partymash
                        </Typography>
                    </Link>
                    <Link style={navStyle} to='/createTournament'>
                        <Typography variant="h6" >
                             Turnier erstellen 
                        </Typography>
                    </Link>
                    <Link style={navStyle} to='/about'>
                        <Typography variant="h6" >
                            Über Uns
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )

    
}

export default NavBar;