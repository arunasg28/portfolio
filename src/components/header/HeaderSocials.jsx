import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/aruna-s-030615280" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/arunasg28" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/aruna_s_10" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials