import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Switch, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loadToken} from "../store/actions/user"
import { logout } from "../store/actions/user";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ButtonGroup } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PlanBrowser = ({ needLogin, loadToken })=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);
  const token = useSelector((state) => state.user.token)
  const currentUser = useSelector((state) => state.user.currentUser)
useEffect(() => {
  setLoaded(true);
  loadToken()
})
    const handleClick =() => {
        dispatch(logout());
    }



  if (!loaded) {
    return null
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className ="ToolBarAligning">
          <Typography variant="h4" color="inherit" noWrap>
            Athlete101
          </Typography>
          {needLogin ?
          (<>
          <ButtonGroup>
                 <Button href="/login" color="inherit">Log In</Button>
                <Button href="/signup" color="inherit">Sign Up</Button>
          </ButtonGroup>
            </>
          ) :
          (
            <ButtonGroup>
            <Button color="inherit">My 101</Button>
            <Button onClick={handleClick} color="inherit">Log Out</Button>
           </ButtonGroup>
          )
          }
             
        </Toolbar>
     
      </AppBar>
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
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
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
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
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
