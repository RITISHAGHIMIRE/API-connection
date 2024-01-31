import React from 'react'
import { Link } from 'react-router-dom'

function Photo() {
  const data=[
    {
      Image:"https://images.unsplash.com/photo-1484249326436-4e8628de5c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"INTERIOR CONCEPT",path:"'/images"
    },
    {
      Image:"https://www.hillhelicopters.com/_next/image?url=%2Fimages%2Fhdc%2Fheader.jpg&w=1200&q=100",name:"HILL DIGITAL CONCEPT",path:"'/images"
    },
    {
      Image:"https://www.hillhelicopters.com/_next/image?url=%2Fimages%2Fengine%2Fimg-engine-header.jpg&w=1200&q=100",name:"GT50 TURBO ENGINE",path:"/images"
    },
    {
     Image:"https://www.hillhelicopters.com/_next/image?url=%2Fimages%2Fga%2Fheader.jpg&w=1200&q=100",name:"GENERAL AVIATION",path:"/images"
    },
    {
      Image:"https://www.hillhelicopters.com/images/configurator/interior9-paint1-image0.jpg",name:"CONFIGURATOR",path:"/images"
    },
    {
      Image:"https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"EXTERIOR CONCEPT",path:"/images"
    },
    {
      Image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " ,name:"JOURNEY TO HX50",path:"/images"
    },
    
  ]


 
  return (
    <div className=" text-white h-screen bg-black">
      <Link to='/images'>  
       <div className="grid grid-cols-4 mx-12 relative top-20  ">

      {
        data.map((val,i)=>{
          return(
            <div className={`text-white  group h-80 ${i===5?"col-span-2":"col-span-1"} relative w-full`} key={i}>
            <img
              src={val.Image}
              className='h-full w-full object-cover'
            />
            <div className='absolute  text-xl  text-center font-bold bottom-0 left-0  w-full'>{val.name}</div>
            <div className='absolute top-0 left-0 group-hover:bg-red-500 group-hover:bg-opacity-20 h-full w-full'> </div>
          </div>
          )
        })
      }
      </div>
      </Link> 
     
          {/* 
          <div className="grid grid-cols-4 mx-12 relative top-20  ">
            <div className="text-white ">
              <img
                src={Val.Image}
                
              />
            </div>
            <div>
              <img
               src={Val.Image}
                className="h-80 w-96"
              />
            </div>
            <div>
              {" "}
              <img
               src={Val.Image}

                className="h-80 w-96"
              />
            </div>
            <div>
              <img
                // src="https://www.hillhelicopters.com/_next/image?url=%2Fimages%2Fga%2Fheader.jpg&w=1200&q=100"
                className="h-80 w-96"
              />
            </div>
          </div> */}
          
          {/* <div className="grid grid-cols-3 mx-12 relative top-20 ">
            <img
              src="https://www.hillhelicopters.com/images/configurator/interior9-paint1-image0.jpg"
              className="h-80 w-100"
            />
            <img
              src="https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-80 w-100"
            />
            <img
              src=""
              className="h-80 w-100"
            />
          </div> */}
        </div>
  )
}

export default Photo