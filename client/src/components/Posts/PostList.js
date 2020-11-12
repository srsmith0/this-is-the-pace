import React from 'react'

const PostList = ({posts}) => {

  const renderPosts = () => {
    return posts.map(post => 
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </div>
     )
  }
  
  return renderPosts()
}

export default PostList;