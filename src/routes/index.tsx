import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from 'src/components/dashboard/dashboard';
import Signin from 'src/components/auth/signin';
import Signup from 'src/components/auth/signup'
import AuthRoute from 'src/routes/auth';
import UserRoute from 'src/routes/user';

const IndexRoute: React.FC = () => (
  <div>
    <Switch>
      <AuthRoute path="/singin" exact component={Signin} />
      <AuthRoute path="/signup" exact component={Signup} />
      <UserRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default IndexRoute;
