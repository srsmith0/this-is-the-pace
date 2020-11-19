import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from '../Posts/SinglePost'
import AdminNav from './AdminNav'

const AdminShowPosts = (props) => {
  const [ posts, setPosts ] = useState(null)

  useEffect(() => {
    axios.get(`/api/admin/posts`)
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(() => {
      setPosts(posts.filter(post => post.id !== id))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const renderPosts = () => {
    if(!posts) return <div>Loading...</div>
    else {
    return posts.map(post => <SinglePost key={post.id} post={post} deletePost={deletePost} />)
    }
  }
  
  //TODO: add a loading spinner instead of null
      return (
      <>
      <AdminNav history={props.history} />
      {renderPosts()}
      </>
      )
}

export default AdminShowPosts;