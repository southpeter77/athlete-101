import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AppContainer from './PlanBrowser'
import NavBar from "./NavBar"


const HomePage = () => {

    return (
        <>
        <NavBar></NavBar>
        <AppContainer/>

        </>
    )
}


export default HomePage;