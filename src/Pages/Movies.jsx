import React from 'react'
import { imageData } from '../assets/movies'
const Movies = () => {
  return (
    <div className='2xl:w-[1200px] w-[100%] mx-auto p-8'>
      <div className='w-full mb-6  flex justify-between items-center'>
        <div>
        <h2 className='font-bold text-3xl'>Movies</h2>
        <p className='text-gray-700 text-lg'>Book the ticket of your favorite movie</p>
        </div>
        <div>
          <input className='border-2 focus:border-blue-400   border-gray-200 rounded-xl p-2 text-lg' type="text" placeholder='Search' />
        </div>
      </div>
      <div className=' flex item-center sm:justify-between justify-center gap-5  flex-wrap'>
         {
          imageData.map((item, i)=>{
            return(
              <div className='hover:scale-[1.03] transition-transform shadow-md  min-w-[230px] rounded-2xl overflow-hidden lg:w-[23%] md:w-[45%] sm:w-[40%]  w-[70%]'>
                 <img src={item.img} className='w-full h-[350px]' alt="" />
                <div className=' px-3 pt-3 pb-1'>
                <div className=' flex justify-between items-center'>
                  <h6 className='text-md font-bold'>{item.name}</h6> 
                  <p className='font-semibold text-zinc-600'>5.4 <i className="fa-solid fa-star text-yellow-500"></i> </p>
                 </div>
                 
                 <p className='mt-2 text-md'>{item.type}</p>
                </div>
              </div>
            )
          })
         }   
         </div>   
    </div>
  )
}

export default Movies
