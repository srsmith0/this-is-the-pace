import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../providers/AuthProvider'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { user } = useContext(AuthContext)

  const newPost = {title, content, user_name: user.name}

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/posts`, newPost)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        autoFocus
        required
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content: </label>
      <textarea
        autoFocus
        required
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Create Post</button>
      </form>
    </div>
  )
}

export default NewPost