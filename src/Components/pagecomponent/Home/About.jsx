import React from 'react'

function About() {
  return (
    <div className="  h-100  relative left-20 w-5/6  flex flex-col  justify-end  ">
    <div className="text-green-500 flex gap-5">
      <div className="text-xl font-extrabold ">HILL</div>
      <div className="text-xl font-extrabold  w-2/5">HX 50</div>
    </div>
    <div className="text-4xl  font-bold text-white w-2/4">
      AS DESIRABLE AS
    </div>
    <div className="text-4xl  font-bold text-white  w-2/5">
      YOUR DESTINATION
    </div>
    <br></br>

    <div className="flex gap-5">
      <div className="text-xm relative font-extrabold text-white w-48 text-center top-3 group font-sans cursor-pointer  border-2 p-2">
        DISCOVER
      </div>
      <div className="text-xm relative font-extrabold  top-3 bg-gray-400 group font-sans cursor-pointer w-48 text-center  p-2 ">
        <div className="relative z-40 font-semibold  text-black">
          I'M INTERESTED
        </div>
        <div className="h-full w-0 group-hover:w-full transition-all duration-150 ease-in-out delay-75 absolute top-0 left-0 bg-gray-500"></div>
      </div>
    </div>
  </div>
  )
}

export default About