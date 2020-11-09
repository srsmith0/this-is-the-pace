import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/User/AdminLogin';
import AdminNew from './components/User/AdminNew';
import NoMatch from './components/NoMatch';
import FetchUser from './components/User/FetchUser';

const App = () => (
  <Fragment>
    <FetchUser>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/admin/new" component={AdminNew} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </Fragment>
)

export default App;
