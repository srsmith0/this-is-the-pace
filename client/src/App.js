import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import AdminNew from './components/AdminNew';
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/admin/new" component={AdminNew} />
        <Route component={NoMatch} />
      </Switch>
  </Fragment>
)

export default App;
