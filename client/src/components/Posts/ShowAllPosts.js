import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'

const ShowAllPosts = () => {
  const [ posts, setPosts ] = useState(null)
  
  useEffect(() => {
    axios.get(`/api/posts`)
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

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

  const renderPosts = () => {
    if(!posts) return <div>Loading...</div>
    let sortedPosts = posts.sort(compare)
    return sortedPosts.map(post => <SinglePost key={post.id} post={post}/>)
  }

  return (
    <div className="post-grid">
      {renderPosts()}
    </div>
  )
}

export default ShowAllPosts;