import React, { useState } from 'react'
import { AuthConsumer } from '../providers/AuthProvider'

const AdminNew = (props) => {
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')
  const [ noMatch, setNoMatch ] = useState(false)

  const user = {name, password}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password === passwordConfirm) {
      props.auth.handleRegister(user, props.history);
     setNoMatch(false)
    } 
      return setNoMatch(!noMatch)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input 
        autoFocus 
        required
        id="name"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        />
        <label for="password">Password: </label>
        <input  
        required
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <label for="passwordConfirm">Confirm Password: </label>
        <input  
        required
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={passwordConfirm}
        placeholder="Confirm Password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <p>{noMatch && "Password does not match" }</p>
        <button>Create</button>
      </form>
    </>  
  )

}

const ConnectedAdminNew= (props) => {
  return <AuthConsumer>{(auth) => <AdminNew {...props} auth={auth} />}</AuthConsumer>
};

export default ConnectedAdminNew;