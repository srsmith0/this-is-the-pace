import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const AdminNav = ({history, post}) => {
  const { handleLogout } = useContext(AuthContext)

  if(!post){  
    return (
      <div>
        <button onClick={() => history.push('/admin/home')}>Home</button>
        <button onClick={() => handleLogout(history)}>Log Out</button>
      </div>
      )
  } else {
    return (
      <div>
        <button onClick={history.goBack}>Go Back</button>
        <button onClick={() => handleLogout(history)}>Log Out</button>
      </div>
    )
  }
};

export default AdminNav;