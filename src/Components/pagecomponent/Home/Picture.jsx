import React from 'react'
import { Link } from 'react-router-dom'

function Picture() {
  const data=[
    {
    Image:"https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F98780fa1-e904-4539-b950-1242ccf9bc12_sddefault.jpg%3Fauto%3Dcompress%2Cformat&w=1200&q=100",path:'/hi'
  ,name:"HIDHIHDIHDIHID"
  },
{
  Image:"https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F5da1ea5a-3260-4aad-a1b2-d1d3cb059bba_Finding_Hill_Series_Poster_FINAL_OFFICIAL_copy-1.jpg%3Fauto%3Dcompress%2Cformat&w=1200&q=100",path:"/hi"
},
{
  Image:"https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F37050337-6759-4eff-a0d1-d991345aebf7_Screenshot_2023-10-25_at_12_43_14.png%3Fauto%3Dcompress%2Cformat&w=1200&q=100",path:"/hi"
}
]
  return (
     <Link to="/hi">
    <div className="grid grid-cols-3 gap-4  relative top-16 mx-10 ">
   {data.map((Val,i)=>{
   return <img
    src={Val.Image}
  
    className='h-full w-full object-cover text-white ' />
   
   })}
    <div className='text-white text-xl font-semibold'>FINDING HILL SEASON 2 | WHO IS JASON HILL?</div>
    <div className='text-white text-xl font-semibold'>FINDING HILL EPISODE 1 | THE ULTIMATE AVIATION</div>
    <div className='text-white text-xl font-semibold'>TAIL BOOM PAINTING AND PRECISION</div>

 
  </div>
  </Link>
   //   <img
  //     // src="https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F98780fa1-e904-4539-b950-1242ccf9bc12_sddefault.jpg%3Fauto%3Dcompress%2Cformat&w=1200&q=100"
  //     className="h-96 w-11/12"
  // />

  //   <img
  //     // src="https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F5da1ea5a-3260-4aad-a1b2-d1d3cb059bba_Finding_Hill_Series_Poster_FINAL_OFFICIAL_copy-1.jpg%3Fauto%3Dcompress%2Cformat&w=1200&q=100"
  //     className="h-96 w-11/12"
  //   />

  //   <img
  //     // src="https://www.hillhelicopters.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhill-helicopters%2F37050337-6759-4eff-a0d1-d991345aebf7_Screenshot_2023-10-25_at_12_43_14.png%3Fauto%3Dcompress%2Cformat&w=1200&q=100"
  //     className="h-96 w-11/12"
  //   />
  )
}

export default Picture