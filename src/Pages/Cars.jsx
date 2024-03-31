import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import HelpingCards from '../Components/HelpingCards'
import FAQs from '../Components/FAQs'
import WhyUse from '../Components/WhyUse'
import Services from '../Components/Services'
import { carRentals } from '../assets/car'
const Cars = (props) => {
  const conditions = [
    "Customers are responsible for paying for their own Fuel Consumption, Toll Taxes, Parking Fees, etc.",
    "Car Rental service is available between 6 am - 12 am only.",
    "Bookings made between 6 pm and 11 pm will be available after 6 am next day.",
    "Vehicle will only be available for upto 12 hours or till 12 am - whichever is less."
  ];
  
  console.log(conditions);
  
  return (
    <>
            <SearchBox category={props.category} dateStyle='block h-10 lg:w-[28%] md:w-[48%] w-[100%]  rounded-lg text-black px-3' selectStyle="outline-none w-full rounded-lg pl-3  text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block h-10  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" formStyle="lg:w-[28%] md:w-[48%] w-[100%]" buttonStyle='bg-yellow-400 h-10 text-xl lg:w-[10%] md:w-[48%] w-[100%] rounded-md' />
            

            <div className='2xl:w-[1200px] w-[100%] mx-auto p-8'>
              <h1 className='font-bold text-3xl flex gap-3'><i className="fa-solid fa-exclamation text-xl font-bold bg-black text-white h-8 w-8 flex items-center justify-center rounded-full"></i> Highlights for intra city</h1>
              <ul className='list-disc px-5 py-3 '>
                {conditions.map((item, i)=>{
                  return <li className='my-2 text-md font-semibold text-gray-500'  key={i}>{item}</li>
                })}
              </ul>
            </div>

            <HelpingCards/>


            <Services mainData="Bookme Car Rental Service" data={carRentals}/>

            <WhyUse />
            <FAQs/>
    </>
  )
}

export default Cars
