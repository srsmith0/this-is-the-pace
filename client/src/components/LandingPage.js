import React from 'react'
import '../Header.css'
import Navbar from './Navbar'
import ShowPosts from './Posts/ShowPosts'

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <h1 className="primary-heading">
          <span className="primary-heading--main">This is the Pace</span>
          <span className="primary-heading--sub">A Wasatch Running Blog</span>
        </h1>
      </header>
      {/* TODO: add a tagline */}
      <Navbar />
      <ShowPosts />
    </div>
      )
}

export default LandingPage;