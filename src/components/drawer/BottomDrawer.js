import React from "react";

function BottomDrawer(){
    const drawerStyle = {
        position: "fixed", 
        bottom: "-15px",
        left: "0",
        right: "0",
        height: "33%",
        border: "2px solid #0E4DA4",
        borderRadius: "15px",
        background: "white"
    }
    
    return (
        <div style={drawerStyle}>

        </div>
    )
}

export default BottomDrawer;