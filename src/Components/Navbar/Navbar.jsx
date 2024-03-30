import React from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    
  return (
    <div id='navbar' className='fixed z-[999] bg-white top-0 left-0 w-full h-20 border flex items-center justify-between sm:px-4 md:px-[1vw] px-2'>

      <div className=" h-20 sm:gap-4 gap-2 flex justify-center items-center">
      <FaBars className='sm:text-3xl text-2xl' onClick={props.handleSideBar}/>
       <Link to="/"><Logo h="" w={window.innerWidth < 769 ? "100" : "150"} style="mt-3"/></Link>
      </div>

      <div className='flex items-center md:gap-12 sm:gap-3 gap-2 h-20'>
        <Link className='sm:text-[16px] text-[14px]' to="/help">Help</Link>
        <Link className='sm:text-[16px] text-[14px]' to="/login">Login</Link>
        <Link className='text-white bg-inherit my-bg sm:px-6 px-2 sm:py-3 py-1 rounded-md' to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
