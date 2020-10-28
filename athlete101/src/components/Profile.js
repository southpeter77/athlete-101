import React,{ useState, useEffect }  from 'react';
import NavBar from "./NavBar"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {loadCurrentUser} from "../store/actions/user"
import { useDispatch, useSelector } from 'react-redux';


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
  }));


const Profile = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const userInformation = useSelector(state=> state.user.userInformation)
    const test = () => {
      dispatch(loadCurrentUser())
        }

    useEffect(()=> {
    dispatch(loadCurrentUser())
    },[])

if(!userInformation) {
    return null
}
    return (
        <>
        <NavBar/>
        <button onClick={test}>HERE</button>
        <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Typography component="h1" variant="h4" align="left" color="textPrimary" gutterBottom>
                Hello {userInformation.firstName}!
            </Typography>
            
          </Container>
        </div>
  {/* show my plans on the left and show me subscribing plan on right //////////////////////*/}
     <Container className={classes.cardGrid} maxWidth="lg">

     </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Athlete 101 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Create, Customize, Publish
        </Typography>
      </footer>
      {/* End footer */}
        </>
    )
}


export default Profile