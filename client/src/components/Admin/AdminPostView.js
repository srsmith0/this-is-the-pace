import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import AdminNav from './AdminNav';

const AdminPostView = (props) => {
  const { id } = props.match.params
  const [ post, setPost ] = useState(null)
  const [ editing, setEditing ] = useState(false)
  const [title, setTitle] = useState(" ")
  const [content, setContent] = useState(" ")
  const [description, setDescription] = useState(" ")
  const [topic, setTopic] = useState(" ")

  useEffect(() => {
    getPost(id)
  }, [id])
  
  const getPost = async (id) => {
    const post = await axios.get(`/api/posts/${id}`)
    setPost(post.data);
    setTitle(post.data.title)
    setContent(post.data.content)
    setDescription(post.data.description)
    setTopic(post.data.topic)
   }

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
    axios.patch(`/api/posts/${id}`, updatedPost)
    .then((res) => {
      setPost(res.data)
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
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>
          <article className="paragraph">{post.content}</article>
      </>
    )
  }

  if(!post) return <div>Loading...</div>
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