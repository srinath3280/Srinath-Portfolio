import React from 'react';
import './navbar.css';

const NavBar = () => {
  document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the value as needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  return (
    <div className='navbar' id="navbar">
      <nav className='navbar-content'>
        <div className='navbar-section1'>
          <h1>SRINATH LINGADAHALLI</h1>
        </div>
        <div className='navbar-section2'>
          <ul className='navbar-section-list'>
            <li className='navbar-section-list-item'><a href='/'>HOME</a></li>
            <li className='navbar-section-list-item'><a href='/about'>ABOUT</a></li>
            <li className='navbar-section-list-item'><a href='/projects'>PROJECTS</a></li>
            <li className='navbar-section-list-item'><a href='/contact'>CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
