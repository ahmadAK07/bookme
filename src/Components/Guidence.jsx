import React from 'react'

const Guidence = ({steps}) => {
  return (
    <>
    
    <div className='2xl:w-[1200px] w-[100%] mx-auto'>
        <div className='px-8 py-5'>
          <h4 className='text-lg font-bold'>Phenomenal Online Bus Tickets Ex perience</h4>
          <p>Bookme is focused on giving protected, reliable, and convenient online bus tickets. Regardless of whether you are returning to your home city, going on a business trip, or exploring another city, you can schedule and book your seats online through Bookme.</p>
        </div>
        <div className='px-8 py-5'>
          <h4 className='text-lg font-bold'>Availability of Multiple Routes</h4>
          <p >Whatever is your destination, we are at your service. Bookme provides online bus bookings for various major routes in Pakistan i.e. Lahore, Karachi, Islamabad, Multan, Faisalabad and Rawalpindi etc. You can easily find the best prices for online tickets to your destination through Bookme.</p>
        </div>
      </div>

      <hr className='2xl:w-[1200px] w-[100%] mx-auto' />
      <div className='2xl:w-[1200px] w-[100%] mx-auto pt-5'>

        <h4 className='px-8 font-bold text-lg'>How to Book Bus Tickets through Bookme</h4>
        <ol className='px-10 py-4 flex flex-col gap-1'>

          {steps.map((item, i) => {
            return <li className='text-gray-500 font-semibold' key={i}>{item}</li>
          })}

        </ol>


      </div>
    </>
  )
}

export default Guidence
