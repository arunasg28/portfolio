import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faChartBar, faCog, faIndustry, faBriefcase, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" className="active">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href="#experience">
            <FontAwesomeIcon icon={faIndustry} />
          </a>
        </li>
        <li>
          <a href="#myprojects">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
        <li>
          <a href="#contacts">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

