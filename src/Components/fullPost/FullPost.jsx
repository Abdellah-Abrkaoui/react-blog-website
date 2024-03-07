import './fullpost.css'

function FullPost() {
  return (
    <div className='fullpost'>
        <div className="postWrapper">
      <img src="/src/assets/header.jpg" alt="" className="fullpostImg" />
      <div className="fullPostInfo">
        <div className="fullPostInfoTitle">
        <h1 className="fullPostTitle">Lorem, ipsum dolor sit amet</h1>
        <div className="fullpostEditDelete">
        <i className="edit fa-solid fa-pen-to-square"></i>
        <i className="delete fa-solid fa-trash-can"></i>
        </div>
        </div>

        <div className="authorInfo">
            <span className="authorname">Author : <b>Abdellah</b></span>
            <span className="published">1 hour ago</span>
        </div>

        <div className="fullpostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, harum? Aliquam eum ex blanditiis excepturi! Expedita sapiente repudiandae quasi, doloremque magni eum illum id aut amet dicta! Deserunt, ipsa commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusamus, et sint illo deleniti, soluta, repudiandae sed sapiente qui quisquam pariatur? Quas labore vero commodi, perspiciatis ea qui quia facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora corporis blanditiis deleniti ab, accusantium delectus enim optio, eos sed officia molestias soluta harum similique iste dolor unde, cumque labore dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam necessitatibus possimus perspiciatis, aut iure nisi temporibus earum harum neque eveniet ipsa reprehenderit fuga qui libero numquam alias, obcaecati magni. Dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, harum? Aliquam eum ex blanditiis excepturi! Expedita sapiente repudiandae quasi, doloremque magni eum illum id aut amet dicta! Deserunt, ipsa commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusamus, et sint illo deleniti, soluta, repudiandae sed sapiente qui quisquam pariatur? Quas labore vero commodi, perspiciatis ea qui quia facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora corporis blanditiis deleniti ab, accusantium delectus enim optio, eos sed officia molestias soluta harum similique iste dolor unde, cumque labore dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam necessitatibus possimus perspiciatis, aut iure nisi temporibus earum harum neque eveniet ipsa reprehenderit fuga qui libero numquam alias, obcaecati magni. Dolorum.</div>
      </div>
        </div>
    </div>
  )
}

export default FullPost
