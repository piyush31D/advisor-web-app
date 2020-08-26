import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import AuthRoute from 'src/routes/auth';
import UserRoute from 'src/routes/user';
import Sidebar from '../components/sidebar/sidebar';
import SectionRight from '../components/section/section.right';
import SectionTop from '../components/section/section.top';
import Signin from 'src/components/auth/signin';
import Signup from 'src/components/auth/signup';
import Dashboard from 'src/components/dashboard/dashboard';
import UsersPage from 'src/pages/users/users.page'

const IndexRoute: React.FC = (props: any) => (
  <div className="app-root">
    <Switch>
      <AuthRoute path="/" component={Signin} exact />
      <AuthRoute path="/singin" component={Signin} />
      <AuthRoute path="/signup" component={Signup} />
      <UserRoute>
        <div className="flex row-flex fill cross-stretch">
          <Sidebar />
          <div className="flex fill col-flex cross-stretch">
            <SectionTop />
            <div className="flex fill row-flex cross-stretch">
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/trades" component={Signin} exact />
                <Route path="/folios" component={Dashboard} exact />
                <Route path="/users" component={UsersPage} exact />
                <Route path="/plans" component={Dashboard} exact />
                <Route path="/chats" component={Dashboard} exact />
              </Switch>
            </div>
          </div>
          <SectionRight />
        </div>

      </UserRoute>
    </Switch>
  </div>
);

export default IndexRoute;
