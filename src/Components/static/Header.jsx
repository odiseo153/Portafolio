import React from 'react'

export default function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Home</a>
  <div className=" navbar-collapse" >
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/proyect">Proyects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}

