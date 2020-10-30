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

useEffect(()=> {
  dispatch(grabOnePlanFunction(planId))
},[])

  if (!viewPlan) {
    return null
  }

  return (
    <React.Fragment>
      <NavBar/>
      <CssBaseline/>
      <main>
  <h1>{viewPlan.ownerUserId}</h1>
      <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
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
        </div>
      </main>
    </React.Fragment>
  );
}


export default Plan




