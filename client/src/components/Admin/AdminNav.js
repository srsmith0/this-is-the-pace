import React, { useContext } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../../providers/AuthProvider'

const AdminNav = ({history}) => {
  const { handleLogout } = useContext(AuthContext)

    return (
      <div>
        <span className="nav-item" onClick={() => history.push('/admin/home')}><HomeIcon fontSize="large" /></span>
        <div className="nav-item nav-item-right" onClick={() => handleLogout(history)}><ExitToAppIcon fontSize="large" /></div>
      </div>
      )
};

export default AdminNav;