import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import GridOn from '@material-ui/icons/GridOn';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import Games from '../components/Games';
import Table from '../components/Table';
import Ranking from '../components/Ranking';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function TournamentOverview() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<VideogameAsset />} label="Spiele"/>
          <Tab icon={<GridOn />} label="Tabelle"/>
          <Tab icon={<FormatListNumbered />} label="Rangliste"/>
        </Tabs>
      </Paper>
      {(value) == 0 ? <Games/> : (value) == 1 ? <Table/> : <Ranking/>}      
    </>
  );
}

export default TournamentOverview;
