import React, { useState } from 'react'
import axios from 'axios'
import AdminNav from './AdminNav'

const AdminPostView = (props) => {
  const { post } = props.location.state
  const [ postView, setPostView ] = useState(post)
  const [ editing, setEditing ] = useState(false)
  const [title, setTitle] = useState(postView.title)
  const [content, setContent] = useState(postView.content)
  const [description, setDescription] = useState(postView.description)
  const [topic, setTopic] = useState(postView.topic)

  const updatedPost = {
    title,
    content,
    description,
    topic
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`/api/posts/${post.id}`, updatedPost)
    .then((res) => {
      setPostView(res.data)
      setEditing(!editing)
    })
  }

  //TODO: make separate component?
  const editView = () => {
    return (
    <>
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
      <button>Update</button>
      </form>
    </>
    )
  }

  const renderPost = () => {
    return (
      <>
        <h1>{postView.title}</h1>
        <h3>{postView.description}</h3>
        <p>{postView.content}</p>
      </>
    )
  }

  return (
    <div>
      <AdminNav history={props.history} />
      <button 
        onClick={() => setEditing(!editing)}
      >
      {editing ? "Close" : "Edit" }
      </button>
      {editing ? editView() : renderPost()}
    </div>
  )
  

};

export default AdminPostView;