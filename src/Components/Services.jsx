import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
    const busRoutes = [
        "Lahore to Multan Bus",
        "Karachi to Hyderabad Bus",
        "Hyderabad to Karachi Bus",
        "Multan to Lahore Bus",
        "Islamabad to Lahore Bus",
        "Faisalabad to Lahore Bus",
        "Sargodha to Lahore Bus",
        "Gujranwala to Lahore Bus",
        "Sahiwal to Islamabad Bus",
        "Sialkot to Lahore Bus",
        "Peshawar To Lahore Bus",
        "Okara to Lahore Bus",
        "Abbottabad to Islamabad Bus",
        "Khanewal to Lahore Bus",
        "Gujrat to Jhelum Bus",
        "Dera Ghazi Khan to Multan",
        "Dera Ismail Khan to Islamabad",
        "Bahawalpur to Islamabad",
        "Jhang to Islamabad",
        "Lahore to Quetta Bus",
        "Islamabad to Quetta",
        "Karachi to Quetta",
        "Peshawar to Quetta",
        "Quetta To Karachi",
        "Quetta To Islamabad Bus",
        "Quetta To Multan Bus",
        "Faisalabad to Multan Bus",
        "Faisalabad to Bahawalpur Bus",
        "Lahore to Swat Bus Service",
        "Islamabad to Faisalabad Bus",
        "Karachi to Islamabad bus",
        "Karachi to Multan Bus",
        "Karachi to Faisalabad Bus",
        "Karachi to Mianwali Bus"
      ];
    
      const [isOpen, setIsOpen] = useState(false);
   

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

   
    
      
  return (
    <div className='2xl:w-[1200px] w-[100%] mx-auto'>
       <div className='w-full flex justify-between items-center p-8 py-8 '>
        <h2 className='text-xl font-semibold'>Bookme Bus Service</h2> <button onClick={handleToggle} className='text-2xl mr-10 outline-none'><i className={`fa-solid fa-angle-${isOpen ? 'down' : 'up'}`}></i></button>
       </div>
        <hr className='2xl:w-[1200px] w-[100%] mx-auto'/>
       <div style={{maxHeight: `${isOpen ? "1800px" : '0px'}`}} className={` px-4 pt-4 gap-y-1 flex overflow-hidden w-full flex-wrap lg:justify-start justify-between transition-max-height `}>
           {busRoutes.map((item, i)=>{
            return <Link className="text-blue-500 text-md w-[30%] h-10 lg:min-w-[250px] sm:min-w-[210px] min-w-[90%]" key={i}>{item}</Link>
           })}
       </div>
    </div>
  )
}

export default Services
