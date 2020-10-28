import React,{ useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {login} from "../store/actions/user"

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

const EditProfileAboutMe = () => {
    const[aboutMe ,setAboutMe] = useState("");
    const classes = useStyles();

    const updateProperty = (callback) => (e) => {
        callback(e.target.value);
      };

      const handleSubmit = (e) => {
          e.preventDefault()
          console.log(aboutMe)
      }

    return (
        <>
          <Typography component="h1" variant="h5">
            About Me
        </Typography>
        <div className="editProfileAboutMeForm3">
        <form className="editProfileAboutMeForm2"  className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid>
        <TextField
        className="editProfileAboutMeForm2"
            autoComplete="About me"
            name="aboutMe"
            variant="outlined"
            required
            id="aboutMe"
            label="about me"
            autoFocus
            value={aboutMe}
            onChange={updateProperty(setAboutMe)}
         />
      
        {/* {errors ? <ul className="errorListLogin">
            {errors.map((each, i) => <li key={i} >{each}</li>)}
        </ul> :
        null} */}
        <Button
                   type="submit"
                   variant="contained"
                   color="primary"
                       >Edit</Button>
        </Grid>
        </form>
        </div>
        </>
    )
}

export default EditProfileAboutMe