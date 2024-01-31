import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function General() {
  return (
    <div className="flex bg-black gap-32 h-200 px-14 py-10 ">
    <div className=" relative top-44">
      <div className="text-green-700 text-xm font-semiboldbold leading-10">
        GENERAL AVIATION 2.0
      </div>
      <div className="text-white font-bold text-2xl py-10">
        A NEW MODEL FOR BRINGING INNOVATIVE NEW AIRCRAFT TO MARKET
      </div>
    </div>
    <div className=" relative top-44 ">
      <div className="text-white text-2xl font-bold leading-10">
        SAFE, LUXURIOUS, THRILLING FLYING EXPERIENCE
      </div>
      <div className="text-white text-xl font-bold py-10 ">
        In acquiring an HX50 you are not just getting a helicopter, you
        are taking part in a revolution in General Aviation. GA 2.0
        provides a roadmap that promotes the design of aircraft that are
        more desirable, powerful and cost-effective, with full long-term
        support for the private owner built in to their purchase.
      </div>
      <br></br>
      <br></br>
    <Link to={'/learn'} > <div className="text-white font-semibold text-xm items-center flex gap-10 ">
        <div>LEARN MORE</div> <FaArrowRightLong />
      </div>
      </Link> 
    </div>
  </div>
  )
}

export default General