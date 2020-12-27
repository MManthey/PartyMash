import React from "react"
import { Button, Grid } from '@material-ui/core'
import InfoIconOutlined from '@material-ui/icons/Info'
import { useHistory } from 'react-router-dom'




function TournamentType(props){

    const history = useHistory()

    const handleClick = (event) => {
        if(event.currentTarget.type === "button"){
            if(event.currentTarget.name === "ko"){
                console.log("KO")
    
                history.push("/createTournament", {
                    type: "KO"
                })
    
                
            }else if (event.currentTarget.name === "round"){
                console.log("Runde")
            }
        }else { //image clicked
            console.log(event.currentTarget.name)
        }
    }

    const gridItemStyle = {
        width:"100%",
        // height: "auto",
        marginTop:"20px"
    }
    const infoIconStyle = {
        position:"absolute",
        right: "10px",
        top:"5px"
        //color:"white"
    }

    const wrapperStyle = {
        position: "relative"
    }
    return (
        
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} style={gridItemStyle}>
                <div style={wrapperStyle}>
                    <InfoIconOutlined fontSize="default" style={infoIconStyle}/>
                    <img name={props.tournamentType} alt={props.name} width="100%" height="100px" src="https://picsum.photos/600/400" onClick={handleClick}/>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Button name={props.tournamentType} variant="contained" color="primary" onClick={handleClick}>{props.name}</Button>
            </Grid>
        </Grid>        
    )
    
} 

export default TournamentType