import React, { Component, useState, useEffect } from 'react';
import HomePage from "./components/HomePage"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import PageNotFound from "./components/PageNotFound"
import { useSelector, useDispatch } from 'react-redux';
import {loadToken} from "./store/actions/user"
import CreatePlan from "./components/CreatePlan"
import Plan from "./components/Plan"

const PrivateRoute = ({component:Component}) => {
  const token = useSelector(state => state.user.token)
const [loaded, setLoaded] = useState(false);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadToken())
  setLoaded(true)
})
if(!loaded) {
  return null
}


  if (token) {
    return <Component></Component>
  }
else {
  return <Redirect to="/"></Redirect>
}


}


const App = ()=>  {

  return (
    <>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/myProfile" component={Profile}></PrivateRoute>
        {/* <Route exact path="/myProfile" component={Profile}></Route> */}
        <PrivateRoute exact path="/myProfile/createplan" component={CreatePlan}></PrivateRoute>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/plan/:id" component={Plan}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
   
    </>
  )
}


export default App;
