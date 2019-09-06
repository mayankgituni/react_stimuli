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
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

// Other
import NavBar from './NavBar'
import mike from "../Images/mike.jpg";
import prac from "../Images/prac.jpg"
import styles from "../Style/profilePageStyle";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import useFetchData from './HttpApi'
import {Link} from "react-router-dom";
import PresetForm from './PresetForm'

const useStyles = makeStyles(styles);

function ProfilePage(p) {
  const classes = useStyles();
  console.log("Properties")

  function onClick() {
    p.setD(0)
  }
  let img;
  let micon
  let iconText
  let pform
  if (p.props.user_type == "RESEARCHER") {
    img = mike
    iconText = "Create Preset"
    micon = Camera
    pform = <PresetForm />
} else {
    img = prac
    iconText = "Patients"
    micon = SupervisorAccountIcon
    pform = <h1>The Patient profile are coming soon. </h1>
  }



  console.log(img)

  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return (
    <div>
      <NavBar call="login" func={p.setD}/>
      <Parallax small filter image={require("../Images/profileBack.jpg")}/>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={30} md={8}>
                    <div className={classes.profile}>
            <Card>
              <CardContent>
                      <div>
                      <br/>
                      <br/>
                      <br/>
                        <img src={img} alt="..." className={imageClasses}/>
                      </div>
                      <div className={classes.name} justify="left">
                        <h1 className={classes.title}>{p.props.fname} {p.props.lname}</h1>
                        <h2>{p.props.user_type}</h2>

                      </div>
              </CardContent>
            </Card>
                    </div>
                  </GridItem>
                </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={15} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  style={{
                  backgroundColor: "#124059"
                }}
                  tabs={[
                  {
                    tabButton: "Profile",
                    tabIcon: AccountBoxIcon,
                    tabContent: (
                      <GridContainer justify="left">
                        <div className={classes.description}>
                          <h3>Email: {p.props.email}</h3>
                          <h3>My-Info:</h3>
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
                          <h2>Age: {p.props.age}</h2>
                        </div>
                      </GridContainer>
                    )
                  }, {
                    tabButton: iconText,
                    tabIcon: micon,
                    tabContent: (
                      <GridContainer justify="center">
                      
                        {pform}
                      </GridContainer>
                    )
                  }, {
                    tabButton: "Stored Test",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                        <h2>STORED TEST:
                        </h2>
                        <a href="http://stimuli.sytes.net:50000/webApp" color="primary">
                          <h2 color="primary">
                            Click Here
                          </h2>
                        </a>
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

export default ProfilePage