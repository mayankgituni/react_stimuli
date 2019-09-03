import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Tune";
import Palette from "@material-ui/icons/PhonelinkSetup";
import Equalizer from "@material-ui/icons/Equalizer";

// Material components
import GridContainer from "../MaterialUi/Jss/Grid/GridContainer.js";
import GridItem from "../MaterialUi/Jss/Grid/GridItem.js";
import Parallax from "../MaterialUi/Jss/Parallax.js";
import NavPills from "../MaterialUi/Jss/NavPills.js";

// Other
import NavBar from './NavBar'
import profile from "../Images/mike.jpg";
import styles from "../Style/profilePageStyle";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const {
        ...rest
    } = props;
    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    return (
        <div>
            <NavBar/>
            <Parallax small filter image={require("../Images/profileBack.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses}/>
                                    </div>
                                    <div className={classes.name} justify="left">
                                        <h3 className={classes.title}>Mike Louboutin</h3>
                                        <h4>RESEARCHER</h4>
                                        <h4>Age: 41</h4>
                                        <h4>Institute: Purdue University</h4>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                "I am Mike, a research student taking a Doctor of Philosophy degree and majoring
                                in a psychology study. I have an extremely rigorous scholarship when doing my
                                past researches and I always focus on the quality of data used in research. In
                                the past months, I was doing new research on Cognitive Function Test. However, I
                                was so stuck with the source of data as it is hard to find patients to do the
                                test and is very slow to collect the data. But in the last week, I found a
                                system called Stimuli, This is an excellent answer to my issue. The Stimuli is
                                very simple to use and user-friendly. I have been using other data collecting
                                tools but none of them really can do what Stimuli do. Stimuli have a powerful
                                test script customize module, which allows me to easily create my own test
                                preset configurations that specific to the research topic that I am doing. After
                                that, all I need to do to collect data is ask Stimuli to create the test papers
                                with an access URL and send the URL to the participant by email. Once they have
                                attempted the test paper, the result will be collected by Stimuli. And the thing
                                that surprises me the most is Stimuli have a data analysis function, which can
                                analysis on my hundred of data and present them in a simple chart way. This
                                function saves me hours of works. I like Stimuli."
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    style={{
                                    backgroundColor: "#124059"
                                }}
                                    tabs={[
                                    {
                                        tabButton: "Create Preset",
                                        tabIcon: Camera,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <h1>Preset related activities</h1>
                                            </GridContainer>
                                        )
                                    }, {
                                        tabButton: "Stored Test",
                                        tabIcon: Palette,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <h1>All the stored tests are here</h1>
                                            </GridContainer>
                                        )
                                    }, {
                                        tabButton: "Results",
                                        tabIcon: Equalizer,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <h1>Results related activities</h1>
                                            </GridContainer>
                                        )
                                    }
                                ]}/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
