import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import './footer.css'

export const Footer = () => {
  return (
    <>
      <footer className='footer_boxItems'>
        <div className='footer_container flex'>
          <p>Cartsy Medicine - All right reserved - Design & Developed by RedQ, Inc</p>
          <div className='social'>
            <BsFacebook className='footer_icon' />
            <RiInstagramFill className='footer_icon' />
            <AiFillTwitterCircle className='footer_icon' />
            <AiFillLinkedin className='footer_icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
