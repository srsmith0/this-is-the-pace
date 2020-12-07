import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';
import AdminNav from './AdminNav';

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

  const deletePost = (id) => {
    let result = window.confirm("Are you sure you want to delete?")
    if (result) {
    axios.delete(`/api/posts/${id}`)
    .then(() => {
      props.history.push('/admin/all_posts')
    })
    .catch((err) => {
      console.log(err)
    })
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`/api/posts/${post.id}`, updatedPost)
    .then((res) => {
      setPostView(res.data)
      setEditing(!editing)
    })
  }

  const editView = () => {
    return (
    <>
     <form onSubmit={handleSubmit}>
      <div className="admin-post-form">
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
        name="content"
        rows="20"
        cols="60"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
            {/* TODO: keep editor???
      <CKEditor
        name="content"
        data={content}
        onChange={(e) => setContent(e.editor.getData())}
      /> */}
      <label className="admin-label" htmlFor="title">Description: </label>
      <input
        required
        className="admin-input description-input" 
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
      <button style={{width: "6rem", margin:"0 auto"}}>Update</button>
      </div>
      </form>
    </>
    )
  }

  const renderPost = () => {
    return (
      <>
        <h1>{postView.title}</h1>
        <h3>{postView.description}</h3>
          <article className="paragraph">{postView.content}</article>
      </>
    )
  }

  return (
    <div>
      <AdminNav history={props.history} />
      <span className="nav-item" onClick={editing ? () => setEditing(!editing) : props.history.goBack}>
        <ArrowBackIosIcon fontSize="large"/>
      </span>
      <div className="admin-edits">
      <span className="nav-item" onClick={() => setEditing(!editing)}>
      {editing ? "Close" : <EditIcon fontSize="large" color="primary"/> }
      </span>
      <span className="nav-item" onClick={() => deletePost(post.id)}>
        <DeleteForeverIcon fontSize="large" color="secondary"/>
      </span>
      </div>
      {editing ? editView() : renderPost()}
    </div>
  )
  

};

export default AdminPostView;