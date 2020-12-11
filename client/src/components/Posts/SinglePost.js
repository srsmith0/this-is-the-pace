import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom'

const SinglePost = ({post, admin}) => {

  const renderPost = () => {
    return(
      <div className="post">
        <Link to={`/post/${post.id}`} className="post-link">
        <div className="post-story">
        <h3>{post.title}</h3>
        <p>{`By ${post.user_name}`}</p>
        </div>
        <div className="post-description">
          <p>{post.description}</p>
        </div>
        </Link>
      </div>
    )
  }

  const renderAdminPost = () => { 
      return(
        <div className="admin-post">
          <Link to={`/admin/post/${post.id}`} className="admin-post-link">
            <div className="admin-post-info">
              <h2>{post.title}</h2>           
              <p>{post.shown_date}</p>
              <p>{post.description}</p> 
           </div>
          </Link>
        </div>
      )
  }
  
  return admin ? renderAdminPost() : renderPost()
}

export default SinglePost;