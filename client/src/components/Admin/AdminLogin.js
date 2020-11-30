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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input 
        autoFocus 
        required
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input  
        required
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
      <Link to="/admin/new">
        Register
      </Link>
    </>  
  )
  } else return <Redirect to="/admin/home" />

}

const ConnectedAdminLogin= (props) => {
  return <AuthConsumer>{(auth) => <AdminLogin {...props} auth={auth} />}</AuthConsumer>
};

export default ConnectedAdminLogin