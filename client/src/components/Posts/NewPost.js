import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../providers/AuthProvider'
import AdminNav from '../Admin/AdminNav'

const NewPost = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [description, setDescription] = useState('')
  const [topic, setTopic] = useState('')
  const { user } = useContext(AuthContext)

  const newPost = {
    title,
    content,
    user_name: user.name,
    description,
    topic  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/posts`, newPost)
      .then((res) => {
        console.log(res.data)
       //TODO: add a success timeout message
      })
      .catch((err) => {
        console.log(err)
      })
    setTitle('')
    setContent('')
    setDescription('')
    setTopic('')
  }

  return (
    <div>
      <AdminNav history={props.history} />
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
      <label htmlFor="title">Description: </label>
      <input
        required
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="title">Topic: </label>
      <input
        required
        name="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button>Create Post</button>
      </form>
    </div>
  )
}

export default NewPost