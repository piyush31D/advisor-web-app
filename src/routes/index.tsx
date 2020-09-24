import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthRoute from 'src/routes/auth';
import UserRoute from 'src/routes/user';
import Sidebar from '../components/sidebar/sidebar';
import SectionRight from '../components/section/section.right';
import Dashboard from 'src/components/dashboard/dashboard';
import InvestorPage from 'src/pages/investor';
import FoliosPage from 'src/pages/folio';
import PlanPage from 'src/pages/plan'
import AuthPage from "src/pages/auth";

const IndexRoute: React.FC = () => (
  <div className="app-root">
    <Switch>
      <AuthRoute path="/" component={AuthPage} exact />
      <UserRoute>
        <div className="flex row-flex fill cross-stretch">
          <Sidebar />
          <div className="flex fill col-flex cross-stretch">
            <div className="flex fill row-flex cross-stretch" style={{ overflow: 'hidden' }}>
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/trades" component={Dashboard} exact />
                <Route path="/folio" component={FoliosPage} />
                <Route path="/investor" component={InvestorPage} />
                <Route path="/plans" component={PlanPage} exact />
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
