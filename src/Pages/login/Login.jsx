import { Link } from "react-router-dom"
import "./login.css"

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Your username ..."/>
        <label>Password</label>
        <input type="password" placeholder="Enter Your password ..."/>
        <button className="loginBtn">Login</button>
      </form>
      <Link to="/register" className="link">
      <button className="loginRegisetrbtn">Register</button></Link>
    </div>
  )
}

export default Login
