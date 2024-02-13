import React from 'react'
import { MdOutlineEuroSymbol } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import ReactPlayer from "react-player";
import { Input } from "postcss";
import { useState } from "react";
import helicopter from "../../assets/helicopter.png";

import About from '../pagecomponent/Home/About';
import Icons from '../pagecomponent/Home/Icons';
import Helicopter from '../pagecomponent/Home/Helicopter';
import Hx from '../pagecomponent/Home/Hx';
import General from '../pagecomponent/Home/General';
import Feature from '../pagecomponent/Home/Feature';
import Updates from '../pagecomponent/Home/Updates';
import Picture from '../pagecomponent/Home/Picture';
import Video from '../pagecomponent/Home/Video';
import Engineer from '../pagecomponent/Home/Engineer';
import Box from '../pagecomponent/Home/Box';
import Photo from '../pagecomponent/Home/Photo';
import Array from '../pagecomponent/Array';
import Homies from '../pagecomponent/Home/Homies_gh';






export default function Home() {
  return (
    <div>
     
     <Homies />
      <About />
     <Icons />
    <Hx />
      <div className="">
        <Helicopter/>
       <Photo />
        <General />
        <Feature/>
     <Array/>
      </div>
      <Engineer/>
      <div className=" bg-slate-800 h-150 gap-11">
       <Updates/>
        <Picture/>
      </div>
    <Video/>
      <Box/>
    </div>
  )
}
