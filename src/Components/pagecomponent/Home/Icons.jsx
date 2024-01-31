import React from 'react'
import { MdOutlineEuroSymbol } from "react-icons/md";


function Icons() {
  return (
    <div className=" relative pt-24 grid gap-10  ">
    <div className=" flex gap-10 text-white  mx-auto py-7  w-6/12">
      <div className="">
        <div className="font-extrabold text-2xl font-mono">500shp</div>
        <div className="text-xs font-extrabold text-center">
          HORSE POWER
        </div>
      </div>
      <div className="">
        <div className="text-3xl font-mono font-extrabold">140 kts</div>
        <div className="text-xs font-extrabold text-center">
          CRUISE SPEED
        </div>
      </div>
      <div className="">
        <div className="text-3xl font-mono font-extrabold">700nm</div>
        <div className="text-xs font-extrabold text-center">MAX RANGE</div>
      </div>
      <div className="">
        <div className="text-3xl font-mono font-extrabold">1760lbs</div>
        <div className="text-xs font-extrabold text-center">PAYLOAD</div>
      </div>
      <div className="">
        <div className="flex text-3xl font-mono font-extrabold">
          {" "}
          <MdOutlineEuroSymbol />
          595000
        </div>
        <div className="text-xs font-extrabold text-center">BASE PRICE</div>
      </div>
    </div>
   
  </div>
  )
}

export default Icons