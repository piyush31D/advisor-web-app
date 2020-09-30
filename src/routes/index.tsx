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
import AdvisorOnboarding from 'src/pages/onboarding';
import OnboardingRoute from './onboarding';

const IndexRoute: React.FC = () => (
  <div className="app-root">
    <Switch>
      <AuthRoute path="/" component={AuthPage} exact />
      <OnboardingRoute path="/onboarding" exact >
        <AdvisorOnboarding />
      </OnboardingRoute>
      <UserRoute>
        {/*TODO: Look into why this doesn't refresh but putting in children rerenders*/}
        <div className="flex row-flex fill cross-stretch">
          <Sidebar />
          <div className="flex fill col-flex cross-stretch">
            <div className="flex fill row-flex cross-stretch" style={{ overflow: 'hidden' }}>
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/trades" component={Dashboard} exact />
                <Route path="/folio" component={FoliosPage} />
                <Route path="/investor" component={InvestorPage} />
                <Route path="/plan" component={PlanPage} />
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
