import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


function Blog() {
  const [data, setdata] = useState(0);
  const optionone = [
    {
      Image:
        "	https://icms-image.slatic.net/images/ims-web/db9e10d1-27c2-45c4-9fb5-bf2cc7cb8092.jpg",
    },

    {
      Image:
        "https://icms-image.slatic.net/images/ims-web/7361771d-9c74-47b7-ae0d-ac13957480c8.jpg",
    },

    {
      Image:
        "https://icms-image.slatic.net/images/ims-web/aaa3bfd0-3074-44f1-996b-805610960b26.jpg",
    },
    {
      Image:
        "https://icms-image.slatic.net/images/ims-web/5c2676c8-80fb-4017-98f1-155088ba0eae.jpg",
    },
    {
      Image:
        "https://icms-image.slatic.net/images/ims-web/32c3a4a5-2afb-4513-91ec-4371d6f35d21.jpg_1200x1200.jpg",
    },
  ];
  const prev=()=>{
    if(data===0){
      setdata(optionone.length-1)
    }else{
      setdata(data - 1);

      }
    }
    
  
const next=()=>{
if(optionone.length-1===data){
setdata(0)
}else{
setdata(data+1);
}
}
  return (
    <div className="flex">
      <button
        onClick={() => {
          prev();
        }}
        type="button"
        className="text-gray  px-10 py-4 border-10"
      >
        <IoIosArrowForward />
      </button>

      <div className="h-72 w-full relative flex overflow-clip ">
        {optionone.map((Val, i) => {
          return (
            <img
              src={Val.Image}
              className={`text-white  absolute transition-all duration-500 delay-100 ease-in-out top-0 left-0 h-72 w-full ${
                i === data ? "translate-x-0" : "translate-x-full"
              }   border-10`}
            />
          );
        })}
      </div>

      <button
        onClick={() => {
          next();
        }}
        type="button"
        className="text-gray  px-10 py-4 border-10"
      >
       <IoIosArrowForward />
      </button>
<div className="h-72 w-full relative flex overflow-clip ">
        {optionone.map((Val, i) => {
          return (
          <div onClick={()=>{
            setdata(i);
          }}
          className={`cursor-pointer h-4 w-4 hover:bg-red-500 ${i===data?'bg-red-500':'bg-gray-500'} rounded-full m-4`}>

          </div>
          );
        })}
      </div>


    </div>
  );
}

export default Blog;
