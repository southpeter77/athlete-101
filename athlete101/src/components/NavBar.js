import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Switch, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loadToken} from "../store/actions/user"
import { logout } from "../store/actions/user";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';



const NavBar = ({ needLogin, loadToken }) => {
    
    const dispatch = useDispatch();

    const handleClick =() => {
        dispatch(logout());
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
    </React.Fragment>
    )
}

const NavBarContainer = () => {
    const needLogin = useSelector((state) => !state.user.token);
    const dispatch = useDispatch();
    return <NavBar needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
  };




export default NavBarContainer;