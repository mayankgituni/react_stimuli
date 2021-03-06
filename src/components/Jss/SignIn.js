import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { Redirect } from 'react-router';

import Image from '../Images/neurology.jpg'
import NavBar from './NavBar'
import FormHandler from './FormHandler'
import useFetchData, {useAddData, useDelData, useUpdateData, useFetch} from './HttpApi'
import ProfilePage from './ProfilePage';
import ErrorPage from './ErrorPage';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// const useFetch = url => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const [item] = data.results;
//     setData(item);
//     setLoading(false);
//     }, []);

//     return { data, loading };
// };


export default function SignIn() {
  const classes = useStyles();
  const [profile, setProfile] = useState({})
  const [values, setValues] = React.useState({})
  const [error, setError] = React.useState(null)
  let [dat, setDat] = useState(0);
  
  // const { handleChange, handleSubmit, values } = FormHandler(login)
  
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log("Values: ")
    console.log(values)
    
    fetch(`http://stimuli.sytes.net:50000/login?email=${values.email}&password=${values.password}`)
      .then(response => response.json())
      .then((response) => {
        console.log( "Just you: ")
        console.log( typeof response )
        setProfile( response )

        console.log( "Profile data: ")
        console.log(profile)
        console.log(dat)
        setDat(1233)
      })
      .catch(error => setError(error))
    }
    
    console.log("==>" )
    console.log(error)
    

  // if(Object.keys(profile).length > 1){
    if(dat > 0){
      console.log("First Name: " + profile.firstName)
      return (<div> <ProfilePage props={profile} setD={setDat} /> </div>)
    }

  if(error != null){
    
    return <ErrorPage />
  }
    
    return (
      <div>
        <NavBar/>
        <Grid container component="main" className={classes.root}>
          <CssBaseline/>
          <Grid item xs={false} sm={4} md={7} className={classes.image}/>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography component="h1" variant="h2">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  onChange={handleChange}
                  value={values.email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus/>
                <TextField
                  onChange={handleChange}
                  value={values.password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"/>
                <FormControlLabel
                  control={< Checkbox value = "remember" color = "primary" />}
                  label="Remember me"/>
                <Button
                  type="submit"
                  onChange={handleSubmit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{
                  backgroundColor: "#124059"
                }}
                  className={classes.submit}>
                  <main>Sign In</main> 
                </Button>
                {/* {load} */}
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}></Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  // return (
  //   <div>
  //     <div>THE PROFILE with the data </div>
  //     {res.response.firstName}
  //   </div>
  // )
  
