import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import HelpingCards from '../Components/HelpingCards'
import WhyUse from '../Components/WhyUse'
import { trainLines, steps } from '../assets/train-data'
import Services from '../Components/Services'
import FAQs from '../Components/FAQs'
const Train = (props) => {


  return (
    <div>
      <SearchBox category={props.category} dateStyle='block h-10 lg:w-[28%] md:w-[48%] w-[100%]  rounded-lg text-black px-3' selectStyle="outline-none w-full rounded-lg pl-3  text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block h-10  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" formStyle="lg:w-[28%] md:w-[48%] w-[100%]" buttonStyle='bg-yellow-400 h-10 text-xl lg:w-[10%] md:w-[48%] w-[100%] rounded-md' />
      <HelpingCards />


      <Services mainData="Train Timings" data={trainLines}/>

      <WhyUse />
      <FAQs/>


      <div className='2xl:w-[1200px] w-[100%] mx-auto p-8'>
        <h3 className='font-bold text-2xl'>How to Book Your Train Online Through Bookme?</h3>
        <ul className='py-4 px-2'>
          {steps.map((item, i)=>{
            return <li className='my-2 text-md text-gray-500 font-semibold' key={i}> {i+1}. &nbsp;{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Train
