import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'

const AdminLogin = (props) => {
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.auth.handleLogin( {name, password}, props.history)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
        autoFocus 
        required
        id="name"
        name="name"
        value={name}
        placeholder="Name" 
        onChange={(e) => setName(e.target.value)}
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

}

const ConnectedAdminLogin= (props) => {
  return <AuthConsumer>{(auth) => <AdminLogin {...props} auth={auth} />}</AuthConsumer>
};

export default ConnectedAdminLogin