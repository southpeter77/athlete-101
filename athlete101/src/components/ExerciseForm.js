import React, { Component, useState, useEffect } from 'react';
import NavBar from './NavBar'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import {getPlanCategoryFunction} from "../store/actions/planCategory"

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));


export default function CreatePlan() {
  const classes = useStyles();
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
//for form///////

const ExerciseForm = (callback) => (e) => {
    callback(e.target.value);
  };




useEffect(()=> {

},[])



return (
    <>
<CssBaseline>
 
        <div className="createPlanDivContainer">
        <Typography component="h1" variant="h5" align="center">
                        Create Exercise
         </Typography>
         <Typography component="h1" variant="h6" align="left">
                        Provide details of each exercises below.
         </Typography>
         <Typography component="h1" variant="subtitle2" align="left" color="secondary">
                        You can update your own picture below.
         </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12}>
              <TextField
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus

              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                  name="price"
                  variant="outlined"
                  required
                  fullWidth
                  id="price"
                  label="price in $"
                  autoFocus
                  type="number"

              />
          </Grid>
          <Grid item xs={12} sm={6} align="center">
          <FormControl variant="outlined">
 <InputLabel>Category</InputLabel>
 <Select
  native
//   onChange={updateProperty(setCategory)}
//   value={state.age}
//   onChange={handleChange}
  label="category"
//   inputProps={{
//     name: 'age',
//     id: 'outlined-age-native-simple',
//   }}
>
  <option aria-label="None"
 
  ></option>
  {/* {list.map((each,i)=> {
     return <option key={i} aria-label="None">{each.categoryName}</option>
  })} */}
  <option value={10}>ddddddddddddddddddddddddddddddddd</option>
  <option value={20}>Twenty</option>
  <option value={30}>Thirty</option>
</Select>
</FormControl>
          </Grid>

          <Grid item xs={12}>
              <TextField
                  name="description"
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="description"
                  label="Description"
                  autoFocus

              />
          </Grid>


          </Grid>
          </form>
     </div>
    
</CssBaseline>
    </>
)
}