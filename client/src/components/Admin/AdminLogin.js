import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'

const AdminLogin = (props) => {
  const [ email, setEmail ] = useState('1@test.com')
  const [ password, setPassword ] = useState('123456')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.auth.handleLogin( {email, password}, props.history)
  }

  if(!props.auth.authenticated){
  return (
    <div className="sign-in">
      <Link className="header-link" to="/">
        <h1>This is the Pace</h1>
      </Link>
      <h2>A running blog</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="email">Email: </label>
        <input 
        autoFocus 
        className="login-input"
        required
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login-label" htmlFor="password">Password: </label>
        <input  
        required
        className="login-input"
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button">Sign In</button>
      </form>
    </div>  
  )
  } else return <Redirect to="/admin/home" />

}

const ConnectedAdminLogin= (props) => {
  return <AuthConsumer>{(auth) => <AdminLogin {...props} auth={auth} />}</AuthConsumer>
};

export default ConnectedAdminLogin