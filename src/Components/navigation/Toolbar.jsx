import React from "react";
import { Link } from "react-router-dom";

function Toolbar() {
  const navdataone = [{ name: "HX50" }, { name: "Hc50" }, { name: "COMPANY" }];

  const optionone = [
    { one: "ENG" },
    { one: "EN" },
    { one: "RU" },
    { one: "ES-LA" },
    { one: "PT-BR" },
  ];
  return (
    <div className="flex justify-between px-10 py-6 w-10/12 ml-auto ">
      <div className="flex gap-10 text-white   ">
        {navdataone.map((val, i) => {
          return (
            <div key={i} className="text-xm font-extrabold relative top-3 uppercase font-sans">
              {val.name}
            </div>
          );
        })}
      </div>
      <div className=" flex text-white items-center gap-10">
        <div className="text-xm font-extrabold relative top-3 font-sans">
         <Link to={'/account'}>ACCOUNT</Link>
        </div>
        <div className="text-xm font-exrabold relative top-3 font-sans">
          <select className="bg-transparent  border-0 outline-none">
            {optionone.map((val, i) => {
              return <option key={i} className="text-black">{val.one}</option>;
            })}
          </select>
        </div>
      <Link to='/configurator'>
      <div className="text-xm relative font-extrabold  top-3 group font-sans cursor-pointer  border-2 p-2 ">
          <div className="relative z-10 font-extrabold">CONFIGURATOR</div>
          <div className="h-full w-0 group-hover:w-full transition-all duration-150 ease-in-out delay-75 absolute top-0 left-0 bg-white"></div>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Toolbar;
