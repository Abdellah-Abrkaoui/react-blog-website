import './App.css'
import TopBar from './Components/topbar/TopBar'
import Home from './Pages/homePage/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PostPage from './Pages/postPage/PostPage'
import Write from './Pages/writePage/Write'
import Settings from './Pages/settings/Settings'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'


function App() {

  return (
    <>
    <Router>
    <TopBar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/fullPost' element={<PostPage/>}/>
    <Route path='/writePost' element={<Write/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>


    </Routes>
    </Router>
    </>
  )
}

export default App
