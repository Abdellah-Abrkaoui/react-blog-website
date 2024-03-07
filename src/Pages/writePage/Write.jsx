import './write.css'

function Write() {
  return (
    <div className='write'>
      <form className="writeForm">
        <img src="/src/assets/header.jpg" alt="" className='writeImg' />
        <div className="formGroup">
            <label for="inputUpload"><i className='uploadIcon fas fa-plus'></i></label>
            <input type="file" id='inputUpload' style={{display : "none"}} />
            <input type="text" placeholder='Title' className='inputTitle' />
        </div>

        <div className="formGroup">
            <textarea className='textarea' placeholder='Tell Your Story ...'></textarea>
        </div>
        <button className='publishBtn'>Publish</button>
      </form>
    </div>
  )
}

export default Write
