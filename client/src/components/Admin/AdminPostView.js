import React from 'react'
import AdminNav from './AdminNav'

const AdminPostView = (props) => {

  return (
    <div>
      <AdminNav history={props.history} />
      <p>I'm a post view!</p>
    </div>
      )
};

export default AdminPostView;