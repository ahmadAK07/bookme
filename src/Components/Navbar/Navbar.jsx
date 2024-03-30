import React from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    
  return (
    <div id='navbar' className='fixed z-[999] bg-white top-0 left-0 w-full h-20 border flex items-center justify-between sm:px-4 md:px-[1vw] px-2'>

      <div className=" h-20 sm:gap-4 gap-2 flex justify-center items-center">
      <FaBars className='text-3xl' onClick={props.handleSideBar}/>
       <Link to="/"><Logo  style="mt-3"/></Link>
      </div>

      <div className='flex items-center sm:gap-12 gap-3 h-20'>
        <Link className='text-[16px]' to="/help">Help</Link>
        <Link className='text-[16px]' to="/login">Login</Link>
        <Link className='text-white bg-inherit my-bg sm:px-6 px-4 sm:py-3 py-2 rounded-md ' to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
