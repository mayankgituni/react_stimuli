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
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Redirect} from 'react-router';
// Inhouse Material Ui imports
import Card from "../MaterialUi/Jss/Card/Card.js";
import CardBody from '../MaterialUi/Jss/Card/CardBody.js';
import CardHeader from '../MaterialUi/Jss/Card/CardHeader.js';
import CardFooter from "../MaterialUi/Jss/Card/CardFooter.js";
import GridContainer from "../MaterialUi/Jss/Grid/GridContainer.js";
import GridItem from "../MaterialUi/Jss/Grid/GridItem.js";
import styles from "../Style/loginPage.js";
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';


import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}



const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);




const useStyles = makeStyles(styles);
function PresetForm(props) {
  const classes = useStyles();
  const radioclasses = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const [age, setAge] = React.useState('');
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;
  
    const { children, open, value } = props;
  
    const popperRef = React.useRef(null);
    React.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.update();
      }
    });
  return (
    <div>
      <form className={classes.form}>
        
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <h2>Title</h2>
              <TextField
                autoComplete="pname"
                name="presetName"
                variant="outlined"
                required
                fullWidth
                id="presetName"
                label="Preset Name"
                autoFocus/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormGroup>
            <br/>
            <br/>
            
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Timed"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Trial Timeout"
          />
          
        </FormGroup>
            </Grid>
            <Grid item xs={12}>
            <h3>Proportion of near distrator</h3>
            <Slider
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                defaultValue={20}
              />
            <h3>Proportion of Taget</h3>
              <Slider
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                defaultValue={20}
              />
            </Grid>
            <Grid item xs={12}>
            <h3>Age</h3>
            <NativeSelect
          value={age}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={30}>Fourty</option>
          <option value={30}>Fifty</option>
          <option value={30}>Sixty</option>
        </NativeSelect>
        <br/>
        <TextField
        id="outlined-name"
        label="No. rows"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="No. Target"
        margin="normal"
        variant="outlined"
      />
            </Grid>
            <div className={radioclasses.root}>
              <FormControl component="fieldset" className={radioclasses.formControl}>
                <FormLabel component="legend">Modes</FormLabel>
                <RadioGroup aria-label="type" name="type" className={radioclasses.group}>
                  <FormControlLabel
                    value="RESEARCHER"
                    control={< Radio />}
                    label="Switch Target"/>
                  <FormControlLabel
                    value="PRACTITIONER"
                    control={< Radio />}
                    label="Interference"/>
                  <FormControlLabel
                    value="PRACTITIONER2"
                    control={< Radio />}
                    label="Multiple Target"/>
                  <FormControlLabel
                    value="PRACTITIONER3"
                    control={< Radio />}
                    label="Divided Attention"/>
                  <FormControlLabel
                    value="PRACTITIONER4"
                    control={< Radio />}
                    label="Relational Components"/>
                  <FormControlLabel
                    value="PRACTITIONER5"
                    control={< Radio />}
                    label="Single shape task"/>
                  <FormControlLabel
                    value="PRACTITIONER6"
                    control={< Radio />}
                    label="Near-distractor Challenge"/>

                </RadioGroup>
              </FormControl>

            </div>

          </Grid>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <main>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
              backgroundColor: "#124059"
            }}
              className={classes.submit}>
              <main>CREATE</main>
            </Button>

          </main>
          <Box mt={5}>
            {/* <Copyright /> */}
          </Box>
        </CardFooter>
      </form>
    </div>
  )
}

export default PresetForm