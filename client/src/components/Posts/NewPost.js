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
      props.history.push('/admin/home')
  }

  return (
    <div>
      <AdminNav history={props.history} />
      <button onClick={props.history.goBack}>Cancel</button>
      <form className="admin-post-form" onSubmit={handleSubmit}>
      <label className="admin-label" htmlFor="title">Title: </label>
      <input
        autoFocus
        className="admin-input"
        required
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="admin-label" htmlFor="content">Content: </label>
      <textarea
        required
        className="content-area"
        rows="20"
        cols="60"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label className="admin-label" htmlFor="title">Description: </label>
      <input
        required
        className="description-input admin-input"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="admin-label" htmlFor="title">Topic: </label>
      <input
        required
        className="admin-input"
        name="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button style={{width: "8rem", margin:"0 auto"}}>Create Post</button>
      </form>
    </div>
  )
}

export default NewPost