import React from 'react';

function Avatar(data){

    const containerStyle = {
        position: "relative",
        textAlign: "center",
        color: "white"
    };
    const imageStyle = {
        borderRadius: "50%",
        width: "100%"
    };
    const textStyle = {
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1000%",
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