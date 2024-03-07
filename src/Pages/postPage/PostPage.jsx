import FullPost from '../../Components/fullPost/FullPost'
import SideBar from '../../Components/sideBar/SideBar'
import './postpage.css'

function PostPage() {
  return (
    <div className='postpage'>
      <FullPost/>
      <SideBar/>
    </div>
  )
}

export default PostPage
