import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateField = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (

  
<DatePicker className="outline-none text-black lg:w-[250px] h-10 pl-3 mx-4 border-2 border-black rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
   

    
  )
}

export default DateField
