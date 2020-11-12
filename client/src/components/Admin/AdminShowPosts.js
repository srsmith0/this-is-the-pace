import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from '../Posts/PostList'

const AdminShowPosts = () => {
  const [ posts, setPosts ] = useState(null)

  useEffect(() => {
    axios.get(`/api/posts`)
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

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
  
  //TODO: maybe add a loading spinner instead of null
  return posts ? <PostList posts={posts} /> : null
}

export default AdminShowPosts;