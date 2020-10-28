import React, { useState, useEffect } from 'react';
import {Redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { loadToken } from "../store/actions/user"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import {signUp} from "../store/actions/user"

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


const SignUp = ({ needLogin, loadToken }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[aboutMe, setAboutme] = useState('');
    const[trainer, setTrainer] = useState(false);
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[started_training_year, setStarted_training_year] = useState('');
    const[balance, setBalance] = useState('');
    const errors = useSelector(state=> state.user.error)
    
  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };
  
  const trainerUpdate = (callback) => (e) => {
      const current = trainer
      callback(!current)
      }

const handleSubmit = async (e) => {
    e.preventDefault();
    const payload ={
     email, password,confirmPassword,aboutMe, trainer,firstName, lastName, started_training_year, balance
    }
    dispatch(signUp(payload))
}

// useEffect(() => {

// })

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className="ToolBarAligning">
                    <Typography variant="h4" color="inherit" noWrap>
                        Athlete101
          </Typography>
                </Toolbar>
            </AppBar>
            <main className="mainContainer">
                      <div className="pictureNextToForm"></div>  
                   <div className="formContainer">  
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
         </Typography>
   
                {errors ? <ul className="errorListSignUp">
            {errors.map((each, i) => <li key={i} >{each}</li>)}
        </ul> :
        null}
      
  <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={updateProperty(setFirstName)}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={updateProperty(setLastName)}

              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={updateProperty(setEmail)}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="started_training_year"
                  label="training since (ex) 2015"
                  id="started_training_year"
                  type="number"
                  value={started_training_year}
                  onChange={updateProperty(setStarted_training_year)}
                />
            </Grid>
            
          <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={updateProperty(setPassword)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={updateProperty(setConfirmPassword)}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="aboutMe"
                  label="aboutMe"
                  id="aboutMe"
                  value={aboutMe}
                  onChange={updateProperty(setAboutme)}
                />
            </Grid>
   
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="trainer" value="true" color="primary" onChange={trainerUpdate(setTrainer)} />}
                label="I am a Personal Trainer *** (In order to publish your Workout Routine, you must check this box)"
                 />
                </Grid>
              </Grid>
                 <Button
                   type="submit"
                   fullWidth
                   variant="contained"
                   color="primary"
                   className={classes.submit}
                //    onSubmit={handleSubmit}
                       >
                           Sign Up
                           </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                  </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
                </div>
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





export default SignUp








// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(3),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));

// const SignUp= () => {
//     const classes = useStyles();

//     return (
//       <Container component="main">
//         <CssBaseline />

//         <AppBar position="relative">
//         <Toolbar className ="ToolBarAligning">
//           <Typography variant="h4" color="inherit" noWrap>
//             Athlete101
//           </Typography>    
//         </Toolbar>
//       </AppBar>

//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <form className={classes.form} noValidate>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="fname"
//                   name="firstName"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="lname"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign Up
//             </Button>
//             <Grid container justify="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Box mt={5}>
//         </Box>
//       </Container>
//     );
//   }

// export default SignUp