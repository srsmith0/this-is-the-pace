import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = ({post, deletePost}) => {

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
        <div className="post">
          <h2>{post.title}</h2>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
          <button>
            <Link to={{
              pathname: `/admin/post/${post.id}`,
              state: {
                post
              }
              }}>
              View
            </Link>
          </button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      )
  }
  
  return deletePost ? renderAdminPost() : renderPost()
}

export default SinglePost;