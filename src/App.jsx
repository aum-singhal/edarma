import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about'
import Home from './pages/home'
import Videos from './pages/videos'
import logo from "./assets/logo.png";

function App() {
  const nav = useNavigate();

  return (
    <>
      <div className='App'>

        <div className="navbar flex-a-cen-j-spbet">
          <div id="logo"><img src={logo} alt="" /></div>
          <div className="nav-items flex-a-cen">
            <div className="nav-links flex-a-cen">
              <div onClick={()=>{nav("/")}} className="item selected">Home</div>
              <div onClick={()=>{nav("/about")}} className="item">About Us</div>
              <div onClick={()=>{nav("/video")}} className="item">Video</div>
              <div onClick={()=>{nav("/#contact")}} className="item">Contact Us</div>
            </div>
            <div className="download-button cursor-pointer">Download Now</div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/video' element={<Videos />} />
        </Routes>
      </div>
    </>
  )
}

export default App
