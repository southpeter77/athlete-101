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
import { createMuiTheme, ThemeProvider } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({


  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6),
    
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

const PlanBrowser = ({ needLogin, loadToken })=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);
  const token = useSelector((state) => state.user.token)
  const currentUser = useSelector((state) => state.user.currentUser)
  const topPlanList = useSelector((state) => state.plan)

  useEffect(() => {
    dispatch(grabTopList())
  setLoaded(true);
  loadToken()
},[])
    const handleClick =() => {
        dispatch(logout());
    }



  if (!loaded) {
    return null
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Train with the Best
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Create, Customize, Publish your Workout Program!
              Just a click away from your next fitness goal
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" >
                    click to view all category
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" >
                    Explore all the plan and lead to search button
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
  {/* show the top plans right here//////////////////////*/}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing ={4}>
  {Object.values(topPlanList).map((each, i)=>{
    return (
      <Grid item key={i} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            {/* <CardMedia 
            className ={classes.cardMedia} 
            image={`../images/simple${i+1}.png`}
            ></CardMedia> */}
            <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Top Plan {i+1}
        </Typography>
        <Typography>
          Trainer: {each.User.firstName} {each.User.lastName}
        </Typography>
        <Typography>
          {each.Category.categoryName}
        </Typography>
        <Typography>
          {each.description}
        </Typography>
            </CardContent>

          </Card>
        </Grid>
    )
    })}

        </Grid>
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
    </React.Fragment>
  );
}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.user.token);
  const dispatch = useDispatch();
  return <PlanBrowser needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};


export default AppContainer












// const PlanBrowser = ({ needLogin, loadToken })=>  {

//   const [loaded, setLoaded] = useState(false);
//   const token = useSelector((state) => state.user.token)
//   const currentUser = useSelector((state) => state.user.currentUser)
// useEffect(() => {
//   setLoaded(true);
//   loadToken()
// })


//   if (!loaded) {
//     return null
//   }

//   return (
//     <>
//      <div className="topNavBar">
//        <div className="topNavBar_text">
//          Athlete-101
//        </div>
//        {!token ? (
//        <div className="buttons">
//           <NavLink to="/login" className="signup-login-button"> Log In</NavLink>
//          <NavLink to="/signup" className="signup-login-button"> Sign Up</NavLink>
//        </div>
//        ): (
//        <div>
//          <button>
//            My 101
//          </button>
//        </div>
//        )}
//      </div>
//      <div className="container">

//      </div>
//     </>
//   );
// }




// const AppContainer = () => {
//   const needLogin = useSelector((state) => !state.user.token);
//   const dispatch = useDispatch();
//   return <PlanBrowser needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
// };


// export default AppContainer
