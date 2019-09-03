import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// Inhouse Material Ui imports
import Card from "../MaterialUi/Jss/Card/Card.js";
import CardBody from '../MaterialUi/Jss/Card/CardBody.js';
import CardHeader from '../MaterialUi/Jss/Card/CardHeader.js';
import CardFooter from "../MaterialUi/Jss/Card/CardFooter.js";
import GridContainer from "../MaterialUi/Jss/Grid/GridContainer.js";
import GridItem from "../MaterialUi/Jss/Grid/GridItem.js";

// Other imports
import NavBar from './NavBar'
import image from '../Images/rightleftbrain.jpg';
import styles from "../Style/loginPage.js";
import useFormValidation from './useFormValidation';
import ValidateAuth from './ValidateAuth';
import "../Style/errorStyle.CSS";

const useStyles = makeStyles(styles);
const useRadioStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  type: ""
}

export default function SignUp() {

//**************** */
  const {handleSubmit, handleChange, handleBlurr, values, errors, isSubmitting} = useFormValidation(INITIAL_STATE, ValidateAuth)


  const classes = useStyles();

  const [cardAnimaton,
    setCardAnimation] = React.useState("cardHidden");
  const radioclasses = useStyles();

  // function handleChange(event) {
  //   setValue(event.target.value);
  // }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  return (
    <div>
      <NavBar/>
      <div
        className={classes.pageHeader}
        style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "110vh",
        maxHeight: "1600px",
        overflow: "hidden",
        padding: "70px 0",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
      }}>

        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader
                    style={classes.cardHeader.backgroundColor}
                    className={classes.cardHeader}>

                    <Typography
                      component="h1"
                      variant="h1"
                      style={{
                      fontWeight: "bold",
                      color: "#e6e2d3"
                    }}>
                      Sign up
                    </Typography>
                  </CardHeader>

                  <CardBody>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          value={values.firstName}
                          autoFocus/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          value={values.lastName}
                          autoComplete="lname"/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlurr}
                          // className={errors.email && 'error-input'}
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          value={values.email}
                          autoComplete="email"/>
                          {errors.email && <p style={{color:"red"}}>
                          {errors.email}</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlurr}
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={values.password}
                          autoComplete="current-password"/>
                          {errors.password && <p style={{color:"red"}}>
                          {errors.password}</p>}
                      </Grid>
                      <div className={radioclasses.root}>
                        <FormControl component="fieldset" className={radioclasses.formControl}>
                          <FormLabel component="legend">Account type</FormLabel>
                          <RadioGroup
                            aria-label="type"
                            name="type"
                            className={radioclasses.group}
                            value={values.type}
                            onChange={handleChange}>
                            <FormControlLabel value="Researcher" control={< Radio />} label="Researcher"/>
                            <FormControlLabel value="Practitioner" control={< Radio />} label="Practitioner"/>

                          </RadioGroup>
                        </FormControl>

                      </div>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={< Checkbox value = "allowExtraEmails" color = "primary" />}
                          label="I want to receive promotions and updates via email."/>
                      </Grid>
                    </Grid>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <main>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "#124059" }}
                        className={classes.submit}>
                        <main>SUBMIT</main>
                      </Button>

                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link href="/SignIn" variant="body2">
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </main>
                    <Box mt={5}>
                      {/* <Copyright /> */}
                    </Box>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
