import './topbar.css'
import { Link } from 'react-router-dom'


function TopBar() {
  return (
    <div className='topbar'>
      <div className="left">
      <ul className="socialList">
      <i className="socialListItem fa-brands fa-facebook"></i>
      <i className="socialListItem fa-brands fa-instagram"></i>
      <i className="socialListItem fa-brands fa-twitter"></i>
      <i className="socialListItem fa-brands fa-pinterest"></i>
      </ul>

        
      </div>
      <div className="center">
        <ul className="navbarList">
            <Link to="/" className='link'><li className="navbarListItem">HOME</li></Link>
            <li className="navbarListItem">ABOUT</li>
            <li className="navbarListItem">CONTACT</li>
            <Link to="/writepost" className='link'><li className="navbarListItem">WRITE</li></Link>
            <Link to="/login" className='link'><li className="navbarListItem">LOGOUT</li></Link>
        </ul>
      </div>
      <div className="right">
        <Link to="settings">
        <img src="/src/assets/pic.jpg" alt="" className="profileImg" /></Link>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar
