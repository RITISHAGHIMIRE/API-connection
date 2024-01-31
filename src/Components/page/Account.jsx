import React, { useState } from "react";

function Account() {
       const [num, setnum] = useState(0);
       const dataone=[
        {Image:"https://images.unsplash.com/photo-1705750164473-c0efa38c6005?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
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
      const prev=()=>{
        if(num===0){
          setnum(dataone.length-1)
        }else{
          setnum(num - 1);

          }
        }
      
const next=()=>{
  if(dataone.length-1===num){
    setnum(0)
  }else{
    setnum(num+1);
  }
}

  return (
    <div>
      <button
        onClick={() => {
         prev()
        }}
        type="button"
        
        className="text-white bg-green-500  px-10 py-4 border-10"
      >
        prev
    

      </button>
      

   <div className="h-48 w-48  relative flex overflow-clip bg-red-700">
   {dataone.map((Val,i)=>{
        // if(i===num){
          return  <img 
          src={Val.Image}
          className={`text-white p-5 absolute transition-all duration-500 delay-100 ease-in-out top-0 left-0 h-44 w-44 ${i===num?'translate-x-0':'translate-x-full'}   border-10`}
          />
        // }
        })}
   </div>
          
      <button
        onClick={() => {
          next()
        }}
        type="button"
        className="text-white bg-yellow-500  px-10 py-4 border-10"
      >
        next
      </button>
    </div>
  );
}

export default Account;
