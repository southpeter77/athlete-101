import React from 'react';
import HomePage from "./components/HomePage"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import PageNotFound from "./components/PageNotFound"

const App = ()=>  {



  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/myProfile" component={Profile}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
   
    </>
  )
}


export default App;
