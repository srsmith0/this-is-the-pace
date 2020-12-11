import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { user: null };

  handleRegister = (user, history, registrationCode) => {
    debugger;
    if(registrationCode === process.env.REACT_APP_REGISTRATION_CODE){
    axios.post("/api/auth/", user)
    .then((res) => {
      this.setState({ user: res.data.data, });
      history.push("/admin/home");
    }).catch((err) => {
      console.log(err)
      alert("Registration Failed")
    })
    } else return alert("Invaild Registration Code")
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
    .then((res) => {
      this.setState({ user: res.data.data });
      history.push("/admin/home")
    }).catch((err) => {
      console.log(err)
      alert("Login Failed")
    })
  }

  //FIXME: add handle update function

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
    .then(() => {
      history.push("/admin")
      this.setState({ user: null });
    }).catch((err) => {
      console.log(err)
      alert("Logout Failed")
    })
  }

  getPost = (id) => {
    debugger;
    axios.get(`/api/posts/${id}`)
    .then((res) => {
      debugger;
      return res.data
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
      ...this.state,
      authenticated: this.state.user !== null,
      handleRegister: this.handleRegister,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      setUser: (user) => this.setState({ user }),
      getPost: this.getPost
      }}>
        { this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;