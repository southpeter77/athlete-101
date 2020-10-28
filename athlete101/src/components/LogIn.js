import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
}));

const Login = () => {
    const classes = useStyles();

    return (
        <>

        <div className="loginForm " >
        <div className={classes.paper}>
        <Button variant="contained" color="primary" className="cancleLogin"> BACK</Button>
        <Typography component="h1" variant="h5">
            Log In
        </Typography>
        <form className={classes.form} noValidate >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
            autoComplete="User Email"
            name="email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            // value={firstName}
            // onChange={updateProperty(setFirstName)}
         />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            autoComplete="Password"
            name="password"
            variant="outlined"
            required
            fullWidth
            id="password"
            label="password"
            autoFocus
            // value={firstName}
            // onChange={updateProperty(setFirstName)}
         />
        </Grid>
        </Grid>
        </form>
        </div>
        </div>
  

        </>
    )
}

export default Login