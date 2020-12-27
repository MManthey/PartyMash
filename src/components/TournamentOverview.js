import React from "react"
import TournamnetType from "./TournamentType"
import { Grid } from '@material-ui/core'
import koTournamentImage from "../images/ko-turnier.jpg"
import roundTournamentImage from "../images/runden-turnier.jpg"

/*
    Besteht aus:
   |- Navbar
   |- TournamentType
        |- TournamentCoverImage
            |- Image
            |- InfoIcon
            |- Modal
                |- HeaderImage
                |- Infotext
                |- ProsList
                |- ConsList
        |- Button
    |- TournamentType

*/
class TournamentOverview extends React.Component {
    // constructor(){
    //     super()
    // }
    

    render(){
        const gridItemStyle = {
            width: "100%",
            marginTop : '20px',
        }
        return(
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} style={gridItemStyle}> 
                    <TournamnetType tournamentType="ko" name="K.O. Turnier" src={koTournamentImage}/>
                </Grid>
                <Grid item xs={12} style={gridItemStyle}>
                    <TournamnetType tournamentType="round" name="Rundenturnier" src={roundTournamentImage}/>
                </Grid>
            </Grid>
        )
    }
}

export default TournamentOverview