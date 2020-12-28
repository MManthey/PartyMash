import React from 'react';
import Typography from '@material-ui/core/Typography';

const Games = (props) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Laufende Spiele
            </Typography>
            <Typography variant="h6" gutterBottom>
                Anstehende Spiele
            </Typography>
        </>
    );
}

export default Games;