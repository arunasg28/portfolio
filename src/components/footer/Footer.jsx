import React from 'react'
import './footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Aruna S</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/aruna-s-030615280"><BsLinkedin/></a>
          <a href="https://github.com/arunasg28"><BsGithub/></a>
          <a href="https://www.instagram.com/aruna_s_10"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Aruna. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer