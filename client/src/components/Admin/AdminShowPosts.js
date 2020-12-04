import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from '../Posts/SinglePost'
import AdminNav from './AdminNav'

const AdminShowPosts = (props) => {
  const [ posts, setPosts ] = useState(null)

  useEffect(() => {
    axios.get(`/api/admin/posts`)
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
    return sortedPosts.map(post => <SinglePost key={post.id} post={post} admin={true} />)
  }
  
  //TODO: add a loading spinner instead of null
      return (
      <>
      <AdminNav history={props.history} />
      {renderPosts()}
      </>
      )
}

export default AdminShowPosts;