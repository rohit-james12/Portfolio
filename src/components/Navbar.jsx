import React, { useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/nlogo.png'

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toogle);
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt="logo" style={{ width: '50px', color: "green"}}/>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex">
            <li className='text-emerald-500 hover:font-bold hover:scale-125'>Home</li>
            <li className='text-emerald-500 hover:font-bold hover:scale-125'>About</li>
            <li className='text-emerald-500 hover:font-bold hover:scale-125'>Skills</li>
            <li className='text-emerald-500 hover:font-bold hover:scale-125'>Projects</li>
            <li className='text-emerald-500 hover:font-bold hover:scale-125'>Contact</li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleToggle} className="md:hidden z-10 cursor-pointer">
            {!toogle ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!toogle ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl text-emerald-500">Home</li>
            <li className="py-6 text-4xl text-emerald-500">About</li>
            <li className="py-6 text-4xl text-emerald-500">Skills</li>
            <li className="py-6 text-4xl text-emerald-500">Projects</li>
            <li className="py-6 text-4xl text-emerald-500">Contact</li>
        </ul>
        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="/">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-700">
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar