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
import CardActions from '@material-ui/core/CardActions';
import EditProfileAboutMe from "./EditProfileAboutMe"
import {showEditForm} from "../store/actions/profile"


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
    const editedAboutMe = useSelector(state => state.profile.edited)
    const userInformation = useSelector(state=> state.user.userInformation)
    const editFormVisibility = useSelector(state => state.profile.showEdit)
    const test = () => {
      dispatch(loadCurrentUser())
        }

    const [clickedEdit , setclickedEdit] = useState(false)
    const clickEditFormOn = (data) => {

      dispatch(showEditForm(data))
    }

    useEffect(()=> {
    dispatch(loadCurrentUser())
    setclickedEdit(!clickedEdit)
    },[editedAboutMe])

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
          <Container className={classes.cardGrid} maxWidth="md">
          <div>picture here from user's profile information</div>
            <Typography component="h1" variant="h3" align="right" color="primary" gutterBottom>
                Hello {userInformation.firstName.toUpperCase()}!
            </Typography>
            <Typography component="h1" variant="subtitle1" align="center" gutterBottom>
                Do Something Today That Your Future Self Will Thank You For!<br></br>
            </Typography>
     
    
            <Grid container spacing={2}>
           
                  <Grid item xs={12}>
                  <Card  variant="outlined" color="primary" className={classes.card}>
                  {/* <CardMedia
                   className={classes.cardMedia}
                 /> */}
                 <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h4" component="h2">
                    Profile
                      </Typography>
                      <Typography variant="h6" component="h2">
                     {userInformation.trainer ? "Trainer": "Trainee"}: 
                     {userInformation.firstName} {userInformation.lastName} <br></br> 
                     Email: {userInformation.email} <br></br>
                     My-Balance: {userInformation.balance} <Button size="small" variant="outlined" color="primary">Charge</Button> <br></br> 
                     Training since : {userInformation.started_training_year} <br></br> 
                     About Me: {userInformation.aboutMe} 
                     {!editFormVisibility ? <Button size="small" variant="outlined" color="primary" onClick={()=>clickEditFormOn(true)}>edit</Button> : <Button size="small" variant="outlined" onClick={()=>clickEditFormOn(false)} color="secondary" >Cancel</Button>}
                     

                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              {editFormVisibility ?<EditProfileAboutMe/> : null}  
                <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                <Typography gutterBottom component="h2">
                      My Workout Plans
                      </Typography>
                  {/* <CardMedia
                   className={classes.cardMedia}
                    image=
                     title="
                 /> */}
                 <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5" component="h2">
                      Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                  <CardActions>
                      <Button size="small" color="primary">
                       View
                      </Button>
                      <Button size="small" color="primary">
                      Edit
                      </Button>
                 </CardActions>
                  </Card>
                  
            </Grid> 
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                  {/* <CardMedia
                   className={classes.cardMedia}
                    image=
                     title="
                 /> */}
       <Typography gutterBottom component="h2">
                      Purchased Plans
                      </Typography>
                 <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5" component="h2">
                      Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                  <CardActions>
                      <Button size="small" color="primary">
                       View
                      </Button>
                      <Button size="small" color="primary">
                      Edit
                      </Button>
                 </CardActions>
                  </Card>
            </Grid> 
            </Grid>
         
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