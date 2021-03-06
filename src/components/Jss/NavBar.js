import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles";

import GridItem from "../MaterialUi/Jss/Grid/GridItem.js";
import Button from "../MaterialUi/Jss/Button";

import {Link} from "react-router-dom";
import LandingStyle from '../Style/LandingStyle'

const useStyles = makeStyles(LandingStyle);
const NavBar = (p) => {
    const classes = useStyles();

    if(p.call == "login"){
        return(
        <div>
            <AppBar
                position="sticky"
                style={{
                backgroundColor: "#124059"
            }}>
                <Toolbar>
                    <Typography variant="title" align="Left" component="h1">
                        STIMULI SOLUTIONS
                    </Typography>

                    <Typography variant="title" align="Right" color="secondary" component="h1">
                        <GridItem md={50} className={classes.textCenter}>
                            <Link to={"/"} className={classes.link}>
                                <Button
                                    color="secondary"
                                    style={{
                                    backgroundColor: "#124059"
                                }}
                                    size="sm">
                                    {/* HOME */}
                                    <img
                                        src={require("../Images/brainlogo.png")}
                                        style={{
                                        width: 60,
                                        height: 50,
                                        tintColor: '#f1f1f1'
                                    }}
                                        alt="HOME"></img>
                                </Button>
                            </Link>
                        </GridItem>
                    </Typography>
                    
                    <hr/>
                    
                    <Link to={"/Signin"} className={classes.link}>
                        <Button
                            size="lg"
                            onClick={()=>p.func(0)}
                            align="right"
                            color="secondary"
                            style={{
                            backgroundColor: "#124059"
                        }}>
                            <main>Logout</main>
                        </Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>)
    }
    return (
        <div>
            <AppBar
                position="sticky"
                style={{
                backgroundColor: "#124059"
            }}>
                <Toolbar>
                    <Typography variant="title" align="Left" component="h1">
                        STIMULI SOLUTIONS
                    </Typography>

                    <Typography variant="title" align="Right" color="secondary" component="h1">
                        <GridItem md={50} className={classes.textCenter}>
                            <Link to={"/"} className={classes.link}>
                                <Button
                                    color="secondary"
                                    style={{
                                    backgroundColor: "#124059"
                                }}
                                    size="sm">
                                    {/* HOME */}
                                    <img
                                        src={require("../Images/brainlogo.png")}
                                        style={{
                                        width: 60,
                                        height: 50,
                                        tintColor: '#f1f1f1'
                                    }}
                                        alt="HOME"></img>
                                </Button>
                            </Link>
                        </GridItem>
                    </Typography>
                    <hr/>
                    
                    
                    <Link to={"/SignIn"} className={classes.link}>
                        <Button
                            size="lg"
                            align="right"
                            color="inherit"
                            style={{
                            backgroundColor: "#124059"
                        }}>

                            <main>Log-In</main>
                        </Button>
                    </Link>
                    <Link to={"/SignUp"} className={classes.link}>
                        <Button
                            size="lg"
                            align="right"
                            color="secondary"
                            style={{
                            backgroundColor: "#124059"
                        }}>
                            <main>Sign-Up</main>
                        </Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;