import React from 'react';
import NavBar from './NavBar'

// react components for routing our app without refresh
import {makeStyles} from "@material-ui/core/styles";
import LandingStyle from '../Style/LandingStyle'
import GridItem from "../MaterialUi/Jss/Grid/GridItem";

const useStyles = makeStyles(LandingStyle);

function ErrorPage() {
    const classes = useStyles();

    return (
        <div>
            <NavBar/>

            
                <br/>
                <br/>
                <br/>
                <br/>
                {/* <body style={"backgroundColor:"white"}> */}
                <h1 style={ {color: 'red'} }> Error respond! These functionality will be implemented in next version!</h1>
                {/* </body> */}
            
        </div>
    );
}

export default ErrorPage;
