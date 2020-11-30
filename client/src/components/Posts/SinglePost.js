import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = ({post, admin}) => {

  const renderPost = () => {
    return(
      <div className="post">
        <h2>{post.title}</h2>
        <div className="post-content">
          <p>{post.content}</p>
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
              }}><div className="admin-post-info">
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