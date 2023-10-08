import React from 'react'

export default function Nav(props) {
  return (
    
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark color">
  <div className="container-fluid">
    <a className="navbar-brand" id='logo' href="/">{props.name}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
