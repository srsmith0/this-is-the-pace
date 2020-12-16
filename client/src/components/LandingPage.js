import React from 'react'
import '../Header.css'
import Navbar from './Navbar'
import ShowAllPosts from './Posts/ShowAllPosts'

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <h1 className="primary-heading">
          <span className="primary-heading--main">This is the Pace</span>
          <span className="primary-heading--sub">A Wasatch Running Blog</span>
        </h1>
      </header>
      <Navbar />
      <ShowAllPosts />
    </div>
      )
}

export default LandingPage;