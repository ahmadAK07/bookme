import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
   {/* <h5 className='my-bg w-full text-center text-white fixed z-[99999]'>Subscribe BookmeBro  today to get amazing discounts and exclusive perks!</h5> */}
    <App />
  </BrowserRouter>,
)
