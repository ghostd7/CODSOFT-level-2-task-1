import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobListingsPage} />
          <Route path="/jobs/:id" component={JobDetailPage} />
          <Route path="/employer/dashboard" component={EmployerDashboard} />
          <Route path="/candidate/dashboard" component={CandidateDashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
