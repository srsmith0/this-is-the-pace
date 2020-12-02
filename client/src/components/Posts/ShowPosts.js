import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'

const ShowPosts = () => {
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
    if(!posts) return null
    return posts.map(post => <SinglePost key={post.id} post={post} />)
  }

  return (
    <div className="post-grid">
      {renderPosts()}
    </div>
  )
}

export default ShowPosts;