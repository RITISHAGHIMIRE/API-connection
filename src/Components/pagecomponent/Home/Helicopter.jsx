import React from 'react'
// import helicopter from "../../assets/helicopter.png";
import helicopter from "../../../assets/helicopter.png";
import { FaArrowRightLong } from 'react-icons/fa6';


function Helicopter() {
  return (
    <div className="">
    <div
      className=" bg-cover  bg-no-repeat h-200"
      style={{
        backgroundImage: `url(${helicopter})`,
        backgroundPosition: "center",
      }}
    >
      <div className="  relative top-40">
        <div className="text-green-500 font-bold text-xl leading-8">
          THE WORLD'S FIRST
        </div>
        <div className="text-green-500 font-bold text-xl leading-8">
          TRULY PRIVATE HELICOPTER
        </div>
        <div className="font-extrabold text-2xl text-white leading-8">
          ENGINEERED FOR FLIGHT,
        </div>
        <div className="font-extrabold text-2xl text-white leading-8">
          DESIGNED FOR OWNERS
        </div>
      </div>
      <div className=" relative top-72 h-16 ">
        <div className="text-white font-bold text-xl leading-10">
          WHY BUILD THE HX50 ?
        </div>
        <div className=" ">
          <img
            src="https://www.hillhelicopters.com/_next/image?url=%2Fimages%2Fhome%2Fthumb_video.jpg&w=1920&q=100"
            className="h-64 w-64 object-cover"
          />
        </div>
      </div>
    </div>
    
   
   
  </div>
  )
}

export default Helicopter