import { Link } from "react-router-dom"
import "./register.css"

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Your username ..."/>
        <label>Full name</label>
        <input type="text" placeholder="Enter Your full name ..."/>
        <label>Email</label>
        <input type="email" placeholder="Enter Your email ..."/>
        <label>Password</label>
        <input type="password" placeholder="Enter Your password ..."/>
        <button className="registerBtn">register</button>
      </form>
      <Link to="/login">
      <button className="registerRegisetrbtn">Login</button></Link>
    </div>
  )
}

export default Register
