import SideBar from '../../Components/sideBar/SideBar'
import './settings.css'

function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitles">
            <span className="settingsupdate">Update Your Account</span>
            <span className="settingsdelete">Delete Account</span>
        </div>
        <div className="settingsPP">
            <span>Profile Picture</span>
           <div className="SettingsImgContainer">
           <img src="/src/assets/header.jpg" alt="" />
           <label for="settingsuploadImg"><i className='settingsUploadIcon fas fa-user-circle'></i></label>
           <input type="file" id="settingsuploadImg"  style={{display : 'none'}}/>
            
           </div>
        </div>

        <div className="settingsForm">
           <div className="formItem">
           <label>Username</label>
            <input type="text" placeholder='abdellahab' />
           </div>
           <div className="formItem">
            <label>Email</label>
            <input type="email" placeholder='abdellahab@gmail.com'  />
            </div>
           <div className="formItem">
            <label>Password</label>
            <input type="password"/>
            </div>
            <button className='updateBtn'>Update</button>
        </div>

      </div>
      <SideBar/>
    </div>
  )
}

export default Settings
