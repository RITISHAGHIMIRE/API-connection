import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-between px-10 py-6 w-10/12 ml-auto ">
        <div className="flex gap-10 text-white   ">
          <div className="text-xl font-bold relative top-3 font-sans">HX50</div>
          <div className="text-xl font-bold relative top-3 font-sans">HC50</div>
          <div className="text-xl font-bold relative top-3 font-sans">
            {" "}
            COMAPNY{" "}
          </div>
        </div>
        <div className=" flex text-white items-center ">
          <div className="text-xl font-bold relative top-3 font-sans">
            ACCOUNT
          </div>
          <div className="text-xl font-bold relative top-3 font-sans">
            <select className="bg-transparent  border-0 outline-none">
              <option>eng</option>
              <option>eng</option>
            </select>
          </div>
          <div className="text-xl relative font-bold  top-3 group font-sans cursor-pointer  border-2 p-2 ">
            <div className="relative z-10">CONFIGURATOR</div>
            <div className="h-full w-0 group-hover:w-full transition-all duration-150 ease-in-out delay-75 absolute top-0 left-0 bg-red-500"></div>
          </div>
        </div>
      </div>
      <div
        className="flex text-white bg-black py-10  w-full absolute top-0 -z-10  h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.hillhelicopters.com/images/hill-meta-image.jpg)`,
        }}
      ></div>
      <div className="bg-red-500">
        chasmiss
      </div>
    </div>
  );
}

export default App;
