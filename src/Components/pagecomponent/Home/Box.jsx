import React from 'react'

function Box() {
  return (
    <div className="bg-black flex h-150">
    <div className="mx-16 py-16">
      <div className="text-white text-3xl font-bold leading-10">
        JOIN OUR GROUP PRESENTATION
      </div>
      <div className="text-white text-xl">
        Are you interested in the HX50? Book your spot in our group
        presentation and learn why the HX50 will be better than your current
        helicopter.
      </div>
      <div className="py-11 text-xl text-white">
        WHAT'S IN THE PRESENTATION
      </div>
      <div className=" flex gap-14 ">
        <div className="text-green-500 text-xl">WHO </div>
        <div className="text-white text-xl">
          Mischa Gelb (aka Pilot Yellow) and Ruben Dias
        </div>
      </div>
      <div className=" flex gap-14">
        <div className="text-green-500 text-xl">WHAT</div>
        <div className="text-white text-xl">
          {" "}
          Exclusive full details about the HX50 not yet available to the
          public{" "}
        </div>
      </div>
      <div className=" flex gap-14">
        <div className="text-green-500 text-xl">HOW</div>
        <div className="text-white text-xl">
          {" "}
          30 minutes presentation + Q&A via ZOOM
        </div>
      </div>
    </div>
    <div className=" mx-16 py-16 gap-20">
      <div className="flex flex-col text-white gap-3">
        NAME *<input type="text" name="" placeholder="" bg-black></input>
      </div>
      <div className="flex flex-col text-white gap-3 py-5">
        EMAIL
        <input type="text" name="" placeholder=""></input>
      </div>
      <div className="flex flex-col text-white gap-3">
        PHONE NO.
        <input type="text" name="" placeholder=""></input>
      </div>
      <div className="text-white py-10 text-xm font-bold">
        Hill Helicopters uses a worldwide direct-to-customer approach with
        no resellers, distributors or agents.
      </div>
    </div>
  </div>
  )
}

export default Box