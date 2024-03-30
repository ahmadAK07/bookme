import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import google_icon from '../assets/google-icon.png'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom';
function Login() {
    const [value, setValue] = useState();

    return (
        <div className='bg-gray-100 flex items-center justify-center w-[100vw] h-screen-80 overflow-x-hidden'>
            <div className=' h-[80%] bg-gray-100'>
                <h2 className='text-3xl text-center font-semibold py-5'>Sign In</h2>
                <form action="" className='bg-white py-10 px-3 flex flex-col gap-6 items-center md:w-[400px] sm:w-[90vw] w-[350px] '>
                  <div className='flex flex-col gap-2  w-[80%]'>
                  <label for="phone" className='font-semibold'>Phone Number</label>
                    <input type="tel" id="phone" className=' inset-input rounded-lg p-3' name="phone" placeholder="123-456-7890" required />
                  </div>
                  <div className='flex flex-col gap-2  w-[80%]'>
                  <label for="phone" className='font-semibold'>Password</label>
                    <input type="password" placeholder='*******' id="password" className=' inset-input  rounded-lg p-3' name="password" required />
                  </div>
                  <a href="/forgot" className='text-blue-500 font-bold w-[80%]'>Forgot Password?</a>
                  <button className='my-bg text-white text-lg w-[80%] p-3 rounded-lg'>Sign in</button>

                  <div className='border  w-[60%] flex items-center gap-2 pl-3 py-2'>
                  <img src={google_icon} className='w-8'  alt="" /> Sign in with Google
                  </div>
                  <div className='border   w-[60%] flex items-center gap-2 pl-3 py-2'>
                  <i className="fa-brands fa-facebook text-3xl text-blue-500"></i>&nbsp; Sign in with Google
                  </div>
                </form>
                <h3 className='text-center p-3 text-zinc-500 font-semibold'>Don't have an account? <Link to="/signup" className="text-blue-600  text-xl">Sign up</Link></h3>
            </div>
        </div>
    );
}

export default Login;




