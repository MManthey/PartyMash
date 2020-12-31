import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function TeamRow(data){
    const containerStyle = {
        padding: "16px",
        border: "3px solid #1BB55C",
        borderRadius: "8px",
        width: "100%",
        height: "20%"
        
        
    };
    if(data.status === "ready"){
        containerStyle.border = "3px solid #1BB55C"
    }
    else if(data.status === "waiting"){
        containerStyle.border = "3px solid #FFBB12"
    }
    else if(data.status === "new"){
        containerStyle.border = "3px dashed #979797"
    }

    const classes = useStyles();

    //TODO make status setable
    //TODO Add text overlay to border
    return (
        <div style={containerStyle} className={classes.root}>
          
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"  className={classes.large} />
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"/>
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"/>
          
        </div>
    )
}

export default TeamRow;