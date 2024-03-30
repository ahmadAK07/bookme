import React, { useEffect } from 'react'
import Slider from "react-slick";

import '../Components/slick.css';
import '../Components/slick-theme.css';


const Practice = (props) => {
    
    const settings = {
       
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
 <>
 <div className="slider-container">
  <Slider {...settings}>
       
    {props.data.map((src, i)=>{
      return (
        <div className='h-20 bg-white'>
          <img src={src} alt="" className='h-20' />
        </div>
      )
    })}

  </Slider>
 </div>
  </>
  )
}

export default Practice
