import React from 'react';
import AppContainer from "./components/PlanBrowser"
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp"

const App = ()=>  {



  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={AppContainer}></Route>
      </Switch>
    </BrowserRouter>
   
    </>
  )
}


export default App;
