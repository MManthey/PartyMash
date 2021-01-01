import React from "react";
import { Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar'

function BottomDrawer(){
    const drawerStyle = {
        position: "fixed", 
        bottom: "-15px",
        left: "0",
        right: "0",
        height: "33%",
        border: "2px solid #0E4DA4",
        borderRadius: "15px",
        background: "white",
        paddingTop: "5%",
        textAlign: "center",
    }
    const avatarStyle = {
        width: '64px',
        height: '64px',
        margin: "0 auto",
        marginTop: "8%"
    }
    
    return (
        <div style={drawerStyle}>
            <Typography variant="h1">Ziehe dich in dein Team!</Typography>
            <Avatar style={avatarStyle} src="/userImages/avatar.png" alt="PB"/>
        </div>
    )
}

export default BottomDrawer;