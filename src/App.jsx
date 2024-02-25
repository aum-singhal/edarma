import './App.css'
import AboutUs from './pages/about'
import Home from './pages/home'
import Videos from './pages/videos'

function App() {
  

  return (
    <>
      <div className='App'>

        <div className="navbar flex-a-cen-j-spbet">
          <div id="logo"></div>
          <div className="nav-items flex-a-cen">
            <div className="nav-links flex-a-cen">
              <div className="item selected">Home</div>
              <div className="item">About Us</div>
              <div className="item">Video</div>
              <div className="item">Contact Us</div>
            </div>
            <div className="download-button cursor-pointer">Download Now</div>
          </div>
        </div>

        <Home />
        <AboutUs />
        <Videos />

      </div>
    </>
  )
}

export default App
