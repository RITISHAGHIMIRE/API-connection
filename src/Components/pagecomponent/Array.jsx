import React, { useState } from 'react'
import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { data } from 'autoprefixer';

function Array() {
    const [show, setshow]=useState(0);
    const abc=[
        {icons:<PiArrowBendDoubleUpRightFill />,
    Title:"For me the helicopter delivers a sense of freedom for the soul that is simply unachievable anywhere else. Jason Hill is taking this divine experience to the next level by creating for us, a state of the art helicopter.",
    iconsa:<PiArrowBendDoubleUpRightFill />,
    
},
{icons:<PiArrowBendDoubleUpRightFill />,
Title:"As an engineer I was captivated to participate in the Hill Helicopter journey and witness the inevitable outcome of a great new product development process, and as a pilot I wanted to enjoy the stunning class-setting performance of the HX50 for my next long-range flying missions.",
iconsa:<PiArrowBendDoubleUpRightFill />,

},

    ]
  return (
    <div className=' bg-white h-screen w-full' >
    <button onClick={()=>{
        setshow(show+1)
    }} className='text-5xl'><IoIosArrowForward />

    </button>
    { abc.map((Val, i) =>{
            if (i===show){
                return (  <div className=''>
                        <div >{Val.icons}</div>
                        <div >{Val.Title}</div>
                        <div >{Val.iconsa}</div>
                        </div>
                        )
            }
                  
                
            })
    }
    <button onClick={()=>{
        setshow(show+1)

    }}
    className='text-5xl'>
<IoIosArrowForward />
    </button>
    </div>
    

  )
}

export default Array