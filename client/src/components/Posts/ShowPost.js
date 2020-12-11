import React, { useEffect, useState } from 'react';
import './ShowPost.css'
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShowComment from '../Comments/ShowComment';

const ShowPost = (props) => {
  const [ post, setPost ] = useState(null)
  const [ comments, setComments ] = useState(null);
  const [ commentAuthor, setCommentAuthor ] = useState(" ")
  const [ commentContent, setCommentContent ] = useState(" ")
  const { id } = props.match.params

  useEffect(() => {
    getComments(id)
    getPost(id)
  }, [])

  const getPost = async (id) => {
   const post = await axios.get(`/api/posts/${id}`)
   setPost(post.data);
  }

  const renderPost = () => {
    return (
      <div>
        <h1 className="show-post-title">{post.title}</h1>
        <p className="post-author">By {post.user_name} on {post.shown_date}</p>
        <article className="paragraph">{post.content}</article>
      </div>
    )
  };

  const getComments = (postId) => {
    axios.get(`/api/posts/${postId}/comments`)
    .then(res => {
      setComments(res.data)
    }).catch(err => {
      console.log(err.data)
    })
  };

  const renderComments = () => {
    if(!comments) return <p>Loading...</p>
    return (
      <>
      <h2 className="comment-title">{comments.length} comments</h2>
      {comments.map(comment => <ShowComment key={comment.id} comment={comment} />)}
      </>
    )
  };

  const commentBox = () => {
    return (
      <div>
        <h3 className="comment-title">What are your thoughts?</h3>
        <form autoComplete="off" className="comment-form">
        <TextField 
          className="comment-author-input"
          margin="normal"
          value={commentAuthor} 
          onChange={(e) => setCommentAuthor(e.target.value)} 
          label="Name" 
          required/>
        <TextField 
          className="comment-content-input"
          margin="normal"
          rows="4"
          value={commentContent} 
          onChange={(e) => setCommentContent(e.target.value)} 
          label="Comment" 
          variant="outlined" 
          multiline required/>
          <Button variant="contained" color="primary">Post</Button>
        </form>
      </div>
    )
  }

  if(!post) return <div>Loading...</div>
  return (
    <>
    <span className="nav-item" onClick={() => props.history.push(`/`)}><HomeIcon fontSize="large" /></span>
    {renderPost()}
    <div className="all-comments">
    {renderComments()}
    {commentBox()}
    </div>
    </>
  )
};

export default ShowPost;

//TODO: create comment controller, ADD BACK BUTTON/TITLE LINK, create comment form, COMMENT SUBMISSION,