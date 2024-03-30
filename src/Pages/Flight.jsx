import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import HelpingCards from '../Components/HelpingCards'
import WhyUse from '../Components/WhyUse'
import FAQs from '../Components/FAQs'
import Practice from './Practice'
import {data, flightRoutes} from '../assets/flight-logo'
import Services from '../Components/Services'
const Flight = (props) => {
  
   

  return (
    <div>
       <SearchBox category={props.category} selectStyle="outline-none w-full rounded-lg pl-3  text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block h-10  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"  formStyle="lg:w-[31%] md:w-[48%] w-[100%] " dateStyle='lg:w-[31%] md:w-[48%] w-[100%]    block h-10  rounded-lg text-black px-3'  passengerStyle='lg:w-[31%] md:w-[48%] w-[100%]  bg-white h-10 rounded-md relative'          classStyle='lg:w-[31%] md:w-[48%] w-[100%]  bg-white h-10 rounded-md'      buttonStyle='bg-yellow-400 h-10 text-xl lg:w-[31%] md:w-[48%] w-[100%] rounded-md'/>
       
       <HelpingCards/>
       <br />
     <div className='px-4 overflow-hidden relative 2xl:w-[1200px] w-[100%] mx-auto'>
     <Practice data={data}/>
     </div>
      <br />


       <WhyUse/>


       <FAQs/>

       <Services data={flightRoutes}/>
    </div>
  )
}

export default Flight
