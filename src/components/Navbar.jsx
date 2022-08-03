import React, { useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleToggle} className="md:hidden z-10 cursor-pointer">
            {!toogle ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!toogle ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Projects</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>
        {/* Social Icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar