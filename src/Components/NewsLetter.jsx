import React from 'react'

const NewsLetter = () => {
  return (
    <div style={{background: '#101828'}} className='py-8'>
      <div className='2xl:w-[1200px] w-[100%] mx-auto sm:px-8 px-6 flex sm:flex-row flex-col sm:gap-0 gap-3 text-white justify-center '>
        <div className='sm:w-[50%] w-[100%]'>
        <h1 className='font-bold md:text-3xl text-2xl'>Subscribe to our newsletter</h1>
         <p className='text-lg'>Stay up to date with the latest news, announcements and articles.</p>

        </div>
        <div className='flex gap-1 sm:flex-row flex-col items-center justify-start sm:w-[50%] w-[100%]'>
            <input type="email" placeholder='Enter your email' className='sm:w-[70%] w-[100%] py-3 pl-2' />
            <button className='sm:w-[25%] w-[100%] py-3 bg-blue-400'>Subscribe</button>
        </div>
       </div>
    </div>
  )
}

export default NewsLetter
