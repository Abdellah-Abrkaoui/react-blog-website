import './singlepost.css'
import { Link } from 'react-router-dom'


function SinglePost() {
  return (
    <div className='singlepost'>
      <img src="/src/assets/header.jpg" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCategories">
        <span>Life</span>
        <span>Music</span>
        </div>
        <Link to='/fullPost' className='link'><h1 className="postTitle">Lorem ipsum dolor sit amet</h1></Link>
        <h6 className="postPublished">1 hour ago</h6>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam ducimus ratione nulla maxime laboriosam, quos reiciendis amet, nostrum animi quibusdam totam nemo fugit neque ipsam et temporibus, asperiores est!</p>
      </div>
    </div>
  )
}

export default SinglePost
