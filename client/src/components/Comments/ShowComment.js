import React from 'react'

const ShowComment = ({ comment }) => {
  return (
    <div>
      <p className="comment-author">{comment.author} at {comment.created_at}</p>
      <p className="comment-body">{comment.content}</p>
      <hr />
    </div>
  )
}

export default ShowComment;