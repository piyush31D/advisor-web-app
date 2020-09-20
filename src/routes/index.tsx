import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import AuthRoute from 'src/routes/auth';
import UserRoute from 'src/routes/user';
import Sidebar from '../components/sidebar/sidebar';
import SectionRight from '../components/section/section.right';
import Dashboard from 'src/components/dashboard/dashboard';
import UsersPage from 'src/pages/investors';
import FoliosPage from 'src/pages/folios';
import PlansPage from 'src/pages/plans/plans.page'
import AuthPage from "src/pages/auth/auth.page";

const IndexRoute: React.FC = (props: any) => (
  <div className="app-root">
    <Switch>
      <AuthRoute path="/" component={AuthPage} exact />
      <UserRoute>
        <div className="flex row-flex fill cross-stretch">
          <Sidebar />
          <div className="flex fill col-flex cross-stretch">
            <div className="flex fill row-flex cross-stretch" style={{overflow:'hidden'}}>
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/trades" component={Dashboard} exact />
                <Route path="/folios" component={FoliosPage} />
                <Route path="/investors" component={UsersPage}/>
                <Route path="/plans" component={PlansPage} exact />
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
