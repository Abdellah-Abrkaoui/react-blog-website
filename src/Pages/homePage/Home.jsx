import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/Posts'
import SideBar from '../../Components/sideBar/SideBar'
import './home.css'

function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
        <SideBar/>
    </div>
    </>
  )
}

export default Home
