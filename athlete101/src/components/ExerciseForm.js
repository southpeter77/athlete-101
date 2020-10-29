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
import {getExercisesFunction} from "../store/actions/exercise"

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
    const exerciseList = useSelector(state => state.exercise)
//for form///////

const ExerciseForm = (callback) => (e) => {
    callback(e.target.value);

  };

useEffect(()=> {
    dispatch(getExercisesFunction())
setLoaded(true);
},[])

if(!loaded) {
    return null
}

return (
   
     <>
 <CssBaseline>
 
  <div className="createExerciseDivContainer">
      <div className="chooseExerciseDiv">CHOOSE EXERCISES</div>
 {exerciseList.map((each) => {
     let gifClass =  `gif${each.Images[0].url}`
 return (
  <div className='eachGifContainer'>
 <div 
 key={each.id} 
 className= {gifClass} >
</div>
 <Typography>{each.title}</Typography>
  <Button    
    variant="contained"
    color="primary"
    >Add</Button>
  <Button    
    variant="outlined"
    color="secondary"
    >Cancel</Button>

 </div>

 )
})} </div>
 </CssBaseline>
    </>
)





// const exerciseTitle=[
// "Angle Pull Up",
// "Close Grip Shoulder Raise",
// "Dumbbell Press",
// "Farmer's Walk",
// "Inner Chest",
// "Jumping Jacks",
// "Kick and One Leg Squat",
// "One Leg Extension",
// "One Leg Squat",
// "Pull Up",
// "Rear Delt",
// "Shoulder Squat",
// "Side Lunges",
// "Single Leg Squate",
// "Stand Up Cable Row",
// "Stand Up Dumbbell Row",
// "Stand Up Row Extension",
// "Steady Run", 
// "Stand Up Shoulder Press",
// "Stead Stand Up Shoulder Press",
// "Sumo Squat Bicep Curl",
// "Get Some Break"
// ]

// return (
//     <>
// <CssBaseline>
 
//  <div className="createExerciseDivContainer">
// {exerciseTitle.map((e,i) => {
// let name = `gif${i+1}`
// return (
//  <div className='eachGifContainer'>
// <div key={i} className="eachGif" className={name}></div>
// <Typography>{e}</Typography>
//  <Button>Add</Button>
//  <Button>Cancel</Button>
// </div>

// )
// })}
// </div>

// </CssBaseline>
//     </>
// )
}