import React from "react"

import { logo } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-8 py-9 min-h-[35px] mt-1">
      
      <img src={logo} alt='logo' className='w-12 h-14.5 left-0 right-0 mx-auto object-contain' />

      <p className="text-secondary text-[12px] leading-[30px] text-center absolute bottom-2 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy; Saugat. All rights reserved.
      </p>
    </div>
  )
}

export default Footer