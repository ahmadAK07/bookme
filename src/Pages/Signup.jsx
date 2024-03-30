import React from 'react'
import { Link } from 'react-router-dom'
import google_icon from '../assets/google-icon.png'
const Signup = () => {
  
  return (
    <div className='bg-gray-100 flex items-center justify-center w-[100vw]'>
    <div className=' flex flex-col items-center justify-center bg-gray-100'>
        <h2 className='text-3xl text-center font-semibold py-5'>Sign Up</h2>
        <form action="" className='bg-white rounded-md shadow-lg py-10 px-3 flex flex-col gap-6 items-center md:w-[400px] sm:w-[90vw] w-[350px] '>
          <div className='flex flex-col gap-2  w-[80%]'>
          <label for="name" className='font-semibold'>Name</label>
            <input type="text" id="name" className='inset-input rounded-lg p-2' placeholder='Enter your Name' name="name" required />
          </div>
          <div className='flex flex-col gap-2  w-[80%]'>
          <label for="email" className='font-semibold'>Phone Number</label>
            <input type="email" id="email" className='inset-input rounded-lg p-2' name="email" placeholder='Enter your email' required />
          </div>
          <div className='flex flex-col gap-2  w-[80%]'>
          <label for="phone" className='font-semibold'>Phone Number</label>
            <input type="tel" id="phone" className='inset-input rounded-lg p-2' name="phone" placeholder="123-456-7890" required />
          </div>
          <div className='flex flex-col gap-2  w-[80%]'>
          <label for="phone" className='font-semibold'>Password</label>
            <input type="password" placeholder='*******' id="password" className='inset-input  rounded-lg p-2' name="password" required />
          <p>Must be at least 6 characters.</p>
          </div>
          <div className='flex flex-col gap-2  w-[80%]'>
          <label for="phone" className='font-semibold'>Confirm Password</label>
            <input type="password" placeholder='*******' id="password" className='inset-input  rounded-lg p-2' name="password" required />
        
          </div>
        
          <button className='my-bg text-white text-lg w-[80%] p-3 rounded-lg'>Sign Up</button>

          <div className='border  w-[60%] flex items-center gap-2 pl-3 py-2'>
          <img src={google_icon} className='w-8'  alt="" /> Sign in with Google
          </div>
          <div className='border   w-[60%] flex items-center gap-2 pl-3 py-2'>
          <i className="fa-brands fa-facebook text-3xl text-blue-500"></i>&nbsp; Sign in with Google
          </div>
        </form>

        <div className='p-2'>
        <h3 className='text-center  text-zinc-500 font-semibold'>Already have an account? <Link to="/login" className="text-blue-600  text-xl">Sign In</Link></h3>
        <h2 className='text-center  text-zinc-500 font-semibold'>By Signing up you agree to our <span className='text-blue-600'>Terms Condition</span> & <span className='text-blue-600'>Privacy Policy</span></h2>
        </div>
           </div>
</div>
  )
}

export default Signup
