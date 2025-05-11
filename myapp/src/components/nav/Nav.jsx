import React from 'react';
import "./nav.css"


const Navbar = () => {
  return (
    <nav className="">
      <div className='flex'>
      <ul>
        <li>
          <a href="#home" className="active">
            <h1>Home</h1>
          </a>
        </li>
        <li>
          <a href="#about">
          <h1>About</h1>
          </a>
        </li>
        <li>
          <a href="#myprojects">
          <h1>Projects</h1>
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

