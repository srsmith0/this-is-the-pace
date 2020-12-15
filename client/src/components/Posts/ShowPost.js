import React, { useEffect, useState } from 'react';
import './ShowPost.css'
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShowComment from '../Comments/ShowComment';
import CommentForm from '../Comments/CommentForm';

const ShowPost = (props) => {
  const [ post, setPost ] = useState(null)
  const [ comments, setComments ] = useState(null);
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

  const compare = (a, b) => {
		const createA = a.created_at;
		const createB = b.created_at;

		let comparison = 0;
		if (createA > createB) {
			comparison = -1;
		} else if (createA < createB) {
			comparison = 1;
		}
		return comparison;
	}

  const renderComments = () => {
    if(!comments) return <p>Loading...</p>
    const sortedComments = comments.sort(compare)
    return (
      <>
      <h2 className="comment-title">{comments.length} comments</h2>
      {sortedComments.map(comment => <ShowComment key={comment.id} comment={comment} />)}
      </>
    )
  };

  if(!post) return <div>Loading...</div>
  return (
    <>
    <span className="nav-item" onClick={() => props.history.push(`/`)}><HomeIcon fontSize="large" /></span>
    {renderPost()}
    <div className="all-comments">
    {renderComments()}
    <CommentForm setComments={setComments} comments={comments} postId={id}/>
    </div>
    </>
  )
};

export default ShowPost;