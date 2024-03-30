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
        // cssEase: "linear",
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
 <>
 <div className="slider-container">
  <Slider {...settings}>
       


   {props.data.map((src, i)=>{
      return (
      <div>
          <div className='h-20 w-[250px]  ml-5  flex justify-center items-center bg-white'>
          <img src={src} alt="" className='h-20' />
        </div>
      </div>
      )
    })}



  </Slider>
 </div>
  </>
  )
}

export default Practice
