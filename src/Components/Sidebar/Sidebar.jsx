import React from 'react'
import { FaBus } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { MdVideoCameraBack } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaC, FaHotel } from "react-icons/fa6";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";
import { Link } from 'react-router-dom';
const Sidebar = (props) => {
   
  
    const handleLinkClick = () => {
      props.handleSideBar(); // Hide the sidebar when a link is clicked
    };

  return (
    <div className={`fixed top-20 z-[99999] bg-white left-0 h-screen-80 lg:w-[250px] md:w-[80px] w-[100vw] md:block ${props.showBar}   border border-t-0 xl:pt-8   lg:pt-4 pt-2`} >
        <ul className=' flex flex-col pt-6 gap-9 w-[100%] px-[1vw]'>
           <Link to="/" onClick={handleLinkClick} className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <FaBus className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Bus</span></Link>
           <Link to="/flight" onClick={handleLinkClick} className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <MdFlight className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Flight</span></Link>
           <Link to="train" onClick={handleLinkClick} className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <FaTrain className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Train</span></Link>
           <Link to="/movies" onClick={handleLinkClick} className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <MdVideoCameraBack className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Movies</span></Link>
           <Link to="/cars" onClick={handleLinkClick} className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <FaCar className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Car Rental</span></Link>
           {/* <Link to="/hotel" className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <FaHotel className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Hotel</span></Link> */}
           {/* <Link to="/events" className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <BsCalendar2EventFill className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Events</span></Link> */}
           {/* <Link to="/tours" className='flex items-center gap-8 px-4 py-3 text-[15px] w-full hover:bg-gray-100'> <MdOutlineTour className='text-2xl text-gray-500'/> <span className='lg:block md:hidden block '>Tours</span></Link> */}
        </ul>
    </div>
  )
}

export default Sidebar

{/* <FaBus /> */}
{/* <MdFlight /> */}
{/* <FaTrain /> */}
{/* <MdVideoCameraBack /> */}
{/* <FaCar /> */}
{/* <FaHotel /> */}
{/* <BsCalendar2EventFill /> */}
{/* <MdOutlineTour /> */}