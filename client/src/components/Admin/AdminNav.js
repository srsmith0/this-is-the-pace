import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const AdminNav = ({history}) => {
  const { handleLogout } = useContext(AuthContext)

  return (
    <div>
      <button onClick={history.goBack}>Go Back</button>
      <button onClick={() => handleLogout(history)}>Log Out</button>
    </div>
  )
};

export default AdminNav;