import React from 'react'
import logo from '../../images/Blitzpath.jpeg'
import logo1 from '../../images/Blitzpathlogo.jpeg'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="container">
    <header className="nav-item">
        <div className="logo-section">
          <div className="logo">
            <img src={logo1} alt="" />
            </div>
            <div className="logo1">
            <img src={logo} alt="" />
            </div>
        </div>
        <nav className='desktop-device'>
            <ul  className='navlink'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services And Products</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrer</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <nav className='mobile-device'>
            <div class="nav-container">
              <div class="dropdown">
                <button class="dropbtn">
                <div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                  </div></button>
                <div class="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">Services and Products</a>
                  <a href="#">Customer Stories</a>
                  <a href="#">About Us</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </nav>
    </header>
    </div>
  )
}

export default Navbar