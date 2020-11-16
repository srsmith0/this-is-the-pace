import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav';

const AdminHome = (props) => {

  return (
    <div>
      <AdminNav history={props.history} />
      <br />
      <button>
      <Link to="/admin/new_post">
        Create New Post
      </Link>
      </button>
      <button>
      <Link to="/admin/all_posts">
        Post History
      </Link>
      </button>
    </div>
  );
};

export default AdminHome;