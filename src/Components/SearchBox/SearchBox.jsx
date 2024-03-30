import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from '../Select/Select';
import DateField from '../DateField/DateField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SearchBox = (props) => {
  const [showToggle, setShowToggle] = useState(false);
  const [btnSTyle, setBtnStyle] = useState("border p-2 rounded text-xl ")
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [selectedDepartureValue, setSelectedDepartureValue] = useState('Departure');
  const [selectedArrivalValue, setSelectedArrivalValue] = useState('Arrival');
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios.get("https://gist.githubusercontent.com/immujahidkhan/014fb1629ddc931e6f6d4a3a4d31abaa/raw/8f5cc4f88b9dc4efc5058c5354b9f955e4bda16f/cities.json")
      .then(res => {
        let citiesArray = [];
        res.data.map(city => {
          citiesArray.push(city.name);
        })

        setCities(citiesArray);
      }).catch(err => console.log(err));
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='my-primary-bg'>
      <div className=' text-white 2xl:w-[1200px] w-[100%] mx-auto   py-10 px-8'>
        <h1 className='text-3xl font-bold'>Search For {props.category} </h1>
        <p className='my-4 text-xl'>Find the best deals for your bus travel</p>
        {props.category != "Train" ?
          <div className=' flex gap-7 text-lg py-3' >
            <label htmlFor="oneway" className='flex items-center gap-1'> <input type="radio" className='w-5 h-5' name='way' id='oneway' /> One Way </label>
            <label htmlFor="twoway" className='flex items-center gap-1'> <input type="radio" className='w-5 h-5' name='way' id='twoway' /> Round Trip</label>
            {props.category == "Flight" ? <label htmlFor="twoway" className='flex items-center gap-1'> <input type="radio" className='w-5 h-5' name='way' id='twoway' /> Multi City</label> : ""}
          </div>
          : ""
        }
        <div className='w-full gap-3 flex items-end   flex-wrap'>
          <Select setVal={setSelectedDepartureValue} val={selectedDepartureValue} cityData={cities} formStyle={props.formStyle} selectStyle={props.selectStyle} />
          <Select setVal={setSelectedArrivalValue} val={selectedArrivalValue} cityData={cities} formStyle={props.formStyle} selectStyle={props.selectStyle} />
          {/* <DateField/> */}

          {/* <DatePicker className=" block h-10 lg:w-[300px] w-[200]" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
          <input type="date" placeholder='Departure Date' className={props.dateStyle} />
          {props.category == "Flight" ?
            (
              <>
                <div className={`${props.passengerStyle} text-black flex items-center h-10 px-2`} >
                  <p className='h-full w-full flex items-center ' onClick={() => setShowToggle(!showToggle)}>
                    {adults || child || infant ? `Adults(${adults}) Child(${child}) Infant(${infant})` : "No Passenger"}
                    </p>
                  {showToggle ? (
                    <div className={`bg-white text-black w-full absolute left-0 top-12 rounded-md px-3 p-1 ${showToggle}`}>
                      <h1 className='flex justify-between items-center h-14'><span className='font-semibold'>Adults(s)</span>    <div className='flex'><button className={btnSTyle} onClick={()=>setAdults(adults > 1 ? adults-1 : 0)}>-</button> <button className={btnSTyle}>{adults}</button> <button onClick={()=>setAdults(adults+1)} className={btnSTyle}>+</button></div></h1>
                      <h1 className='flex justify-between items-center h-14'><span className='font-semibold'>Children(s)</span>    <div className='flex'><button className={btnSTyle} onClick={()=>setChild(child > 1 ? child - 1 : 0)}>-</button> <button className={btnSTyle}>{child}</button> <button onClick={()=>setChild(child+1)} className={btnSTyle}>+</button></div></h1>
                      <h1 className='flex justify-between items-center h-14'><span className='font-semibold'>Infants(s)</span>    <div className='flex'><button className={btnSTyle} onClick={()=>setInfant(infant > 1 ? infant - 1 : 0)}>-</button> <button className={btnSTyle}>{infant}</button> <button onClick={()=>setInfant(infant+1)} className={btnSTyle}>+</button></div></h1>
                    </div>
                  ) : ""}
                </div>
                <select className={props.classStyle}>
                  <option value="">class</option>
                  <option value="economy">Economy</option>
                  <option value="premium economy">Premium Economy</option>
                  <option value="business">Business</option>
                </select>
              </>
            )
            : ""
          }
          <button className={props.buttonStyle}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
