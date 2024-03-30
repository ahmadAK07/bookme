import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import HelpingCards from '../Components/HelpingCards'
import WhyUse from '../Components/WhyUse'
import Services from '../Components/Services'
import FAQs from '../Components/FAQs'
import Guidence from '../Components/Guidence'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Bus = (props) => {
  const steps = [
    "Enter the departure and destination locations in the “From” and “To” tab respectively.",
    "Select the “Date of Your Bus Trip” and hit the “Search” button.",
    "Select a bus service of your choice from the list of buses that are displayed then click bookme.",
    "Select a seat number and mention your gender in the seat plan.",
    "Put in the “Passenger Information” and “Contact Information”",
    "You have to mention whether you are vaccinated or not.",
    "You will receive the OTP on your phone number, put it in.",
    "After filling all the information, select the payment method i.e easy paisa, debit card, and jazz cash etc.",
    "Hit the checkout button to confirm your online bus booking."
  ];


  return (
    <div>

      <div>
        <SearchBox category={props.category} dateStyle='block h-10 lg:w-[28%] md:w-[48%] w-[100%]  rounded-lg text-black px-3' selectStyle="outline-none w-full rounded-lg pl-3  text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block h-10  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" formStyle="lg:w-[28%] md:w-[48%] w-[100%]" buttonStyle='bg-yellow-400 h-10 text-xl lg:w-[10%] md:w-[48%] w-[100%] rounded-md' />
      </div>

      <HelpingCards />
      <WhyUse />

      <Services />
      <FAQs />

     <Guidence steps={steps}/>

    
    </div>
  )
}

export default Bus
