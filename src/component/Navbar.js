import React from 'react'
import image from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-none">
      <div className="container-fluid">
        <img src={image} width='200px' className="navbar-brand ms-5" alt="" />

        <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent">
          <ul className="navbar-nav pe-5 ms-auto mb-2 mb-lg-0">
            <li className="nav-item pe-3">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar