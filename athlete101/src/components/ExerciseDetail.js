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
import {deletePickedExerciseFunction} from '../store/actions/pickedExercise'
import {createExerciseFunction} from "../store/actions/exercise"
import {CURRENT_PLAN_ID} from "../store/actions/plan"


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


export default function ExerciseDetail({pickedExercise, pickedExerciseName}) {

const pickedExerciseDetail = useSelector(state => state.exerciseFormDetail)
const dispatch = useDispatch();
const[description, setDescription] = useState('')
const[title, setTitle] =useState("")
const deleteButtonHandler = () => {
    dispatch(deletePickedExerciseFunction())
}
const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };
  
const submitHandler = () => {
    const userId = window.localStorage.getItem("currentUserId")
    const currentPlanId = window.localStorage.getItem(CURRENT_PLAN_ID)
    const data = {title, imageId:pickedExercise,userId,description,currentPlanId}
    dispatch(createExerciseFunction(data))
    deleteButtonHandler()
}
useEffect(()=>{

},[pickedExerciseDetail])

if (!pickedExerciseDetail) {
    return null
}
return (
   
     <>
 <CssBaseline>
  <div className="createExerciseDivContainer">

      <div className=' singleGifCOntainer'>
 <div 
 
 className={`gif${pickedExercise}`}>
</div>
 <Typography align="center" variant ="subtitle2">Provide TItle and Description</Typography>
 <Box textAlign='center'>
         <Button  
    variant="contained"
    color="Primary"
    onClick={submitHandler}
    >
    Submit</Button>
     <Button  
    variant="outlined"
    color="Secondary"
    onClick={deleteButtonHandler}
    >
    Delete</Button>

 </Box>
 <TextField
        className="formDescriptionExercise" 
            name="description"
            variant="outlined"
            required
            value={title}
            id="description"
            label="Exercise Title"
            autoFocus
            onChange={updateProperty(setTitle)}
         />
        <TextField
        className="formDescriptionExercise" 
            name="description"
            variant="outlined"
            required
            multiline
            rows={4}
            value={description}
            id="description"
            label="Provide detail about this work out"
            autoFocus
            onChange={updateProperty(setDescription)}
         />

</div>
</div>


 </CssBaseline>
    </>
)
}