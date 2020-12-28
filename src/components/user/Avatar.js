import zIndex from '@material-ui/core/styles/zIndex';
import React from 'react';

function Avatar(data){

    const containerStyle = {
        float: "left",
        height: "100%",
        width: "20%",
        position: "relative",
        color: "white",
        padding: "6px"

    };
    const imageStyle = {
        position: "relative",
        borderRadius: "50%",
        width: "100%",
        top: "0",
        left: "0"
    };
    //TODO Text position scaling not working 100% beatiful on reisize
    const textStyle = {
        zIndex: "100",
        position: "absolute",
        top: "0",
        left: "25%",
        fontSize: "180%",
        textShadow: "0 0 10px black"
        
    };

    return(
        <div style={containerStyle}>
            <img src={data.imagePath} alt="Avatar" style={imageStyle}></img>
            <h1 style={textStyle}>{data.name}</h1>
           
        </div>
    )

    
}

export default Avatar;