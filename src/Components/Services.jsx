import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Services = (props) => {
  
    
      const [isOpen, setIsOpen] = useState(false);
   

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

   
    
      
  return (
    <div className='2xl:w-[1200px] w-[100%] mx-auto'>
       <div className='w-full flex justify-between items-center p-8 py-8 '>
        <h2 className='text-2xl font-semibold'>{props.mainData}</h2> <button onClick={handleToggle} className='text-2xl mr-10 outline-none'><i className={`fa-solid fa-angle-${isOpen ? 'down' : 'up'}`}></i></button>
       </div>
        <hr className='2xl:w-[1200px] w-[100%] mx-auto'/>
       <div style={{maxHeight: `${isOpen ? "3000px" : '0px'}`}} className={` px-8 pt-4 gap-y-1 flex overflow-y-scroll w-full flex-wrap lg:justify-start justify-between transition-max-height `}>
           {props.data.map((item, i)=>{
            return <Link className="text-blue-500 text-md w-[30%] h-10 lg:min-w-[250px] sm:min-w-[210px] min-w-[90%]" key={i}>{item}</Link>
           })}
           <br />
           <br />
           <br />
       </div>
    </div>
  )
}

export default Services
