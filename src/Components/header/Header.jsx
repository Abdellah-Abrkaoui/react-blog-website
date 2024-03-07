import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="/src/assets/header.jpg" alt="" className="headerImg" />
    </div>
  )
}

export default Header
