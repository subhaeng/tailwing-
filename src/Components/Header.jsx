import React from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <img src="./assets/Logo.svg" alt="logo" />
                <button className='bg-gradient-to-r from-orange-300 to-red-400 text-xs text-white px-2.5 rounded-e-2xl '>Hosterr is hiring!!</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6 '>
                <li><a href="#"></a>Plans</li>
                <li><a href="#"></a>Find Domain</li>
                <li><a href="#"></a>Why Hoster</li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6 '>
                <a className=' rounded-md px-4 py-3 bg-sky-800 hover:bg-blue-300 text-white' href="#">Sign In</a>
                <button className='rounded-md px-4 py-3 bg-sky-800 hover:bg-blue-300 text-white'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <HiOutlineBars3BottomRight />
            </div>
        </div>
    )
}

export default Header