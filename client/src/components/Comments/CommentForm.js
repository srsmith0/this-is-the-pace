import { TextField, Button } from '@material-ui/core';
import axios from 'axios'
import React, { useState } from 'react'

const CommentForm = ({comments, setComments, postId}) => {
  const [ commentAuthor, setCommentAuthor ] = useState(" ")
  const [ commentContent, setCommentContent ] = useState(" ")

  const newComment = {author: commentAuthor, content: commentContent, post_id: postId}

  const handleSubmit = (e) => {
    console.log(newComment)
    e.preventDefault();
    axios.post(`/api/posts/${postId}/comments`, newComment)
    .then(() => {
      setCommentAuthor(" ")
      setCommentContent(" ")
    })
    .catch(err => {
      console.log(err)
    })
    setComments([ newComment, ...comments])
  }

  return (
    <div>
        <h3 className="comment-title">What are your thoughts?</h3>
        <form onSubmit={handleSubmit} autoComplete="off" className="comment-form">
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
          <Button type="submit" variant="contained" color="primary">Post</Button>
        </form>
      </div>
  )
}

export default CommentForm;