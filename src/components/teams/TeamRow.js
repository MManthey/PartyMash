import React from 'react';
import Avatar from '../user/Avatar';
function TeamRow(data){
    const containerStyle = {
        display: "inline-block",
        padding: "20px",
        border: "3px solid #1BB55C",
        borderRadius: "8px",
        width: "-moz-calc(100% - 80px)",
        width: "-webkit-calc(100% - 80px)",
        width: "-o-calc(100% - 80px)",
        width: "calc(100% - 80px)",
        height: "20%"
        
        
    };
    //TODO make status setable
    //TODO Add text overlay to border
    return (
        <div style={containerStyle}>
            <Avatar imagePath="/userImages/avatar.png" name="PB"></Avatar>
            <Avatar imagePath="/userImages/avatar.png" name="PB"></Avatar>
            <Avatar imagePath="/userImages/avatar.png" name="PB"></Avatar>
        </div>
    )
}

export default TeamRow;