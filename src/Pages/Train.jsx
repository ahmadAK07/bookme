import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import HelpingCards from '../Components/HelpingCards'
import WhyUse from '../Components/WhyUse'

const Train = (props) => {
  
  return (
    <div>
       <SearchBox category={props.category} dateStyle='block h-10 lg:w-[28%] md:w-[48%] w-[100%]  rounded-lg text-black px-3' selectStyle="outline-none w-full rounded-lg pl-3  text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block h-10  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"  formStyle="lg:w-[28%] md:w-[48%] w-[100%]" buttonStyle='bg-yellow-400 h-10 text-xl lg:w-[10%] md:w-[48%] w-[100%] rounded-md'/>
       
       <HelpingCards/>



   
<WhyUse/>
    </div>
  )
}

export default Train
