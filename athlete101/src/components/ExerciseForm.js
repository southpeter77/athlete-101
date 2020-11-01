import React, {useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {getExercisesFunction} from "../store/actions/exercise"
import ExerciseDetail from "./ExerciseDetail"
import {pickedExerciseInFormFunction} from '../store/actions/pickedExercise'
import {grabOnePlanFunction} from "../store/actions/plan"

export default function CreatePlan() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [pickedExercise, setPickedExercise]= useState('')
    const exerciseList = useSelector(state => state.exercise)
    const[pickedExerciseName, setPickedExerciseName] =useState('')
    const pickedExerciseDetail = useSelector(state => state.exerciseFormDetail.pickedExercise)
    const planId = window.localStorage.getItem("CurrentPlanId")
    const viewPlan = useSelector(state => state.plan.viewPlan)

    //for form///////

useEffect(()=> {
    dispatch(getExercisesFunction())
    dispatch(grabOnePlanFunction(planId))
setLoaded(true);

},[pickedExerciseDetail])

if(!loaded) {
    return null
}

return (
     <>
 <CssBaseline>
 
  <div className="createExerciseDivContainer">
      <div className="chooseExerciseDiv">EXPLORE EXERCISE</div>
 {exerciseList.map((each,i ) => {
     let gifClass =  `gif${each.id}`
     let exerciseId = each.id
 return (
  <div key={i} className='eachGifContainer'>
 <div 
 className= {gifClass} >
</div>
 <Typography align="center" variant ="subtitle2">{each.title}</Typography>
 <Box textAlign='center'>
     <Button  
    variant="contained"
    style={{backgroundColor:"lightgray"}}
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







{viewPlan.exercises ? 
<>
<button onClick={()=>console.log(viewPlan)}>aaaaaaaaa</button> 
<div className="previewDivContainer">
{viewPlan.exercises.map(each => 
    <>


    

    </>
    )}
    
    <Button
    onClick={()=>{
    window.localStorage.removeItem("CurrentPlanId")
    window.location.replace("/myProfile")}}
    >Done</Button>

        </div>
    </>

: null} 

    </>
)

}
