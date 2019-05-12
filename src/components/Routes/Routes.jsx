import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={SignUp} />
  </Switch>
);

export default Routes;
