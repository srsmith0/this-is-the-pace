import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom'

const SinglePost = ({post, admin}) => {

  const renderPost = () => {
    return(
      <div className="post">
        <h3>{post.title}</h3>
        <p>{`By ${post.user_name}`}</p>
        <div className="post-description">
          <p>{post.description}</p>
        </div>
      </div>
    )
  }

  const renderAdminPost = () => { 
      return(
        <div className="admin-post">
            <Link to={{
              pathname: `/admin/post/${post.id}`,
              state: {
                post
              }
              }}
              className="admin-post-link"
              >
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