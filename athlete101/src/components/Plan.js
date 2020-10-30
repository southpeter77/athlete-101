import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {loadToken} from "../store/actions/user"
import { logout } from "../store/actions/user";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {grabTopList} from "../store/actions/plan"
import NavBar from "./NavBar"
import { useParams } from 'react-router-dom';
import {grabOnePlanFunction} from '../store/actions/plan'
import Box from '@material-ui/core/Box';

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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Plan = ()=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const viewPlan = useSelector(state => state.plan.viewPlan)
  const {id} = useParams()
  const planId =  Number.parseInt(id);
  const token = window.localStorage.getItem('TOKEN_KEY')
useEffect(()=> {

  dispatch(grabOnePlanFunction(planId))
},[])

const click = () => {
  console.log(viewPlan)
}

  if (!viewPlan) {
    return null
  }

  return (
    <React.Fragment>
      <NavBar/>
      <CssBaseline/>
      <main>
 <button onClick={click}>ddddddddddddddd</button>

  <div className="ownersInformationDiv">
  <Typography gutterBottom variant="h5" component="h2" align="center">
             {viewPlan.planOwnerFirstName.toUpperCase()}   {viewPlan.planOwnerLastName.toUpperCase()}'s   {viewPlan.planTitle.toUpperCase()}
               </Typography>

  <div>profile picture on the right!!!!!!!!!!!!</div>
  <Typography gutterBottom variant="subtitle2"align="left" >First Name: {viewPlan.planOwnerFirstName}</Typography>
  <Typography gutterBottom variant="subtitle2"align="left">Last Name: {viewPlan.planOwnerLastName}</Typography>
  <Typography variant="subtitle2"align="left">About {viewPlan.planOwnerFirstName.toUpperCase()}: {viewPlan.planOwnerAboutMe}</Typography>
  <Typography gutterBottom variant="subtitle2"align="left">Training Since: {viewPlan.planOwnerYear}</Typography>
  <Typography gutterBottom variant="subtitle2"align="left">Workout Category: {viewPlan.planOwnerAboutMe}</Typography>
  <Button size="small" style={{color:"black", backgroundColor:"gray"}}>View Profile</Button>
</div>

 <div className="exerciseInPlanContainer">
<div className="topPlanTitle">
 <div className="planTitle">
  <Typography variant="h5"align="center"> Title: {viewPlan.planTitle}</Typography>
</div>

<div className="planAuthor">
  <Typography variant="h6"align="center"> Author: {viewPlan.planOwnerFirstName} {viewPlan.planOwnerLastName}</Typography>
</div>
 </div>

 <div className="planDescription">
 <Typography variant="h6"align="left"> Description: {viewPlan.planDescription}</Typography>
</div>
 {viewPlan.exercises.map((each,i ) => {
     let gifClass =  `gif${each.imageId}`
 return (
   
    <div key={i} className="eachExercise">
      
  <div key={i} className='eachGifContainer'>
    
 <div 
 className= {gifClass} >
</div>
</div>
<div className="exerciseDescriptionAndTitle">
<Typography align="left" variant ="h6">
Title: {each.title}
 </Typography>
  <Typography align="left" variant ="subtitle">
Description: {each.description}
 </Typography>
</div>

 


</div>
 ) 

})} 
 </div>












      {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Please Login or Sign-Up to continue viewing this plan
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Create, Customize, Publish your Workout Program!
              Just a click away from your next fitness goal
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    click to view all category
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Explore all the plan and lead to search button
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div> */}
      </main>
    </React.Fragment>
  );
}


export default Plan




