import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/Admin/AdminLogin';
import AdminNew from './components/Admin/AdminNew';
import NoMatch from './components/NoMatch';
import FetchUser from './components/Admin/FetchUser';
import NewPost from './components/Posts/NewPost';
import AdminShowPosts from './components/Admin/AdminShowPosts';

const App = () => (
  <Fragment>
    <FetchUser>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={AdminLogin} />
        {/* <NavBar> */}
        <Route exact path="/admin/new" component={AdminNew} />
        <Route exact path="/admin/all_posts" component={AdminShowPosts} />
        <Route exact path="/admin/new_post" component={NewPost} />
        {/* </NavBar> */}
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </Fragment>
)

export default App;
