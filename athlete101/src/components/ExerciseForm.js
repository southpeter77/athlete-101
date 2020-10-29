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
import ExerciseDetail from "./ExerciseDetail"
import {pickedExerciseInFormFunction} from '../store/actions/pickedExercise'
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
    const [pickedExercise, setPickedExercise]= useState('')
    const exerciseList = useSelector(state => state.exercise)
    const[pickedExerciseName, setPickedExerciseName] =useState('')
    const pickedExerciseDetail = useSelector(state => state.exerciseFormDetail.pickedExercise)

    //for form///////

useEffect(()=> {
    dispatch(getExercisesFunction())
setLoaded(true);

},[pickedExerciseDetail])

if(!loaded) {
    return null
}

return (
     <>
 <CssBaseline>
 
  <div className="createExerciseDivContainer">
      <div className="chooseExerciseDiv">CHOOSE EXERCISE</div>
 {exerciseList.map((each,i ) => {
     let gifClass =  `gif${each.Images[0].url}`
     let exerciseId = each.id
 return (
  <div key={each.title} className='eachGifContainer'>
 <div 
 className= {gifClass} >
</div>
 <Typography align="center" variant ="subtitle2">{each.title}</Typography>
 <Box textAlign='center'>
     <Button  
    variant="contained"
    color="primary"
    onClick={
        ()=>{setPickedExercise(exerciseId) 
            setPickedExerciseName(each.title)
            dispatch(pickedExerciseInFormFunction(exerciseId))
        }
    }
    >
    Add</Button>
 </Box>
  
  {/* <Button    
    variant="outlined"
    color="secondary"
    >
    Cancel</Button> */}

 </div>

 )
})} </div>
 </CssBaseline>

{pickedExerciseDetail ?<ExerciseDetail pickedExercise={pickedExercise} pickedExerciseName={pickedExerciseName}></ExerciseDetail> : null}


    </>
)
}
