import React from 'react';
import HomePage from "./components/HomePage"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp"

const App = ()=>  {



  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
   
    </>
  )
}


export default App;
