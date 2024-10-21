import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flx-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10w] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight'>Book Appointment<br/> With Trusted Doctors</p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through extensive list of trusted doctors, <br/> schedule</p>
            </div>
            <a href="">
                Book Appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header