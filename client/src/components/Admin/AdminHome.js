import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav';

const AdminHome = (props) => {

  return (
    <div>
      <AdminNav history={props.history} />
      <div className="admin-options">
      <Link className="admin-link" to="/admin/new_post">
        <div className="admin-home-buttons">
          <span>Create New Post</span>
        </div>
      </Link>
      <Link className="admin-link" to="/admin/all_posts">
        <div className="admin-home-buttons">
          <span>Post History</span>
        </div>
      </Link>
      </div>
  
    </div>
  );
};

export default AdminHome;