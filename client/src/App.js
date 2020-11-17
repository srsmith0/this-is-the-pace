import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/Admin/AdminLogin';
import AdminNew from './components/Admin/AdminNew';
import NoMatch from './components/NoMatch';
import FetchUser from './components/Admin/FetchUser';
import NewPost from './components/Posts/NewPost';
import AdminShowPosts from './components/Admin/AdminShowPosts';
import AdminHome from './components/Admin/AdminHome';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import AdminPostView from './components/Admin/AdminPostView';

const App = () => (
  <Fragment>
    <FetchUser>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/admin/new" component={AdminNew} />
        <ProtectedRoute exact path="/admin/home" component={AdminHome} />
        <ProtectedRoute exact path="/admin/all_posts" component={AdminShowPosts} />
        <ProtectedRoute exact path="/admin/post/:id" component={AdminPostView} />
        <ProtectedRoute exact path="/admin/new_post" component={NewPost} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </Fragment>
)

export default App;
