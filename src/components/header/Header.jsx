import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home' className='Header'>

        <div className="container header__container">

          <h4>Hello, I'm</h4>
          <h2>Aruna S</h2>
          <h4 className="text-light">Web developer | MERN stack</h4>

          <div className="me">
            <img src={me} alt='me'/>
          </div>
          
          <a href="#contacts" className='scroll__down'>Scroll Down</a>
          <HeaderSocials/>
          <CTA/>
          
        </div>
      </header>

    
    
  )
}

export default Header