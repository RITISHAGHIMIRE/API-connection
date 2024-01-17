import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./test";
import { MdOutlineEuroSymbol } from "react-icons/md";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-between px-10 py-6 w-10/12 ml-auto ">
        <div className="flex gap-10 text-white   ">
          <div className="text-xm font-extrabold relative top-3 font-sans">HX50</div>
          <div className="text-xm font-extrabold relative top-3 font-sans">HC50</div>
          <div className="text-xm font-extrabold relative top-3 font-sans">
            {" "}
            COMAPNY{" "}
          </div>
        </div>
        <div className=" flex text-white items-center gap-10">
          <div className="text-xm font-extrabold relative top-3 font-sans">
            ACCOUNT
          </div>
          <div className="text-xm font-exrabold relative top-3 font-sans">
            <select className="bg-transparent  border-0 outline-none">
              <option>ENG</option>
              <option>EN</option>
              <option>RU</option>
              <option>ES-LA</option>
              <option>PT-BR</option>

            </select>
          </div>
          <div className="text-xm relative font-extrabold  top-3 group font-sans cursor-pointer  border-2 p-2 ">
            <div className="relative z-10 font-extrabold">CONFIGURATOR</div>
            <div className="h-full w-0 group-hover:w-full transition-all duration-150 ease-in-out delay-75 absolute top-0 left-0 bg-white"></div>
          </div>
        </div>
      </div>
      <div
        className="flex text-white bg-black py-10  w-full absolute top-0 -z-10  h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.hillhelicopters.com/images/hill-meta-image.jpg)`,
        }}
      ></div>
      <div className="  h-100 relative left-20 w-5/6  flex flex-col  justify-center  ">
        <div className="text-green-500 flex gap-5">
       <div className="text-xl font-extrabold ">HILL</div>
       <div className="text-xl font-extrabold  w-2/5">HX 50</div>
       </div>
       <div className="text-4xl  font-bold text-white w-2/4">AS DESIRABLE AS</div>
       <div className="text-4xl  font-bold text-white  w-2/5">YOUR DESTINATION</div><br></br>

<div className="flex gap-5">
       <div className="text-xm relative font-extrabold text-white w-28 top-3 group font-sans cursor-pointer  border-2 p-2">DISCOVER</div>
       <div className="text-xm relative font-extrabold  top-3 group font-sans cursor-pointer  border-2 p-2 ">
            <div className="relative z-10 font-extrabold text-white">I'M INTERESTED</div>
            <div className="h-full w-0 group-hover:w-full transition-all duration-150 ease-in-out delay-75 absolute top-0 left-0 bg-white"></div>
          </div>
       </div>

      </div>
      <div className=" flex gap-10 text-white w-5/6 justify-center items-center relative bottom-40">
        <div className="">
        <div>500shp</div>
        <div>HORSE POWER</div>
        </div>
        <div className="">
        <div>140 kts</div>
        <div>CRUISE SPEED</div>
        </div>
        <div className="">
        
        <div>700nm</div>
        <div>MAX RANGE</div>
        </div>
        <div className="">

        <div>1760 lbs</div>
        <div>PAYLOAD</div>
        </div>
        <div className="">
        <div> <MdOutlineEuroSymbol />595000</div>
        <div>BASE PRICE</div>
        </div>

      </div>
    </div>
  );
}

export default App;
