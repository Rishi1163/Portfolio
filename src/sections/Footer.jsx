import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center items-center md:items-start'>
            <a href="#">Rishi Jadhav</a>
        </div>
        <div className="socials">
            {socialImgs.map((img) => (
                <a href={img.href} key={img.url} className='icon' target='_blank'>
                    <img src={img.imgPath} alt="" />
                </a>
            ))}
        </div>

        <div className="flex flex-col justify-center">
            <p className='text-center md:text-end'>
               © {new Date().getFullYear()} Rishi. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
