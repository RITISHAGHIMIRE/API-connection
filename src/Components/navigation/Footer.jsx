import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // const navdataone = [
  //   { name: "EXTERIOR CONCEPT",path:'Exteriorconcept' },
  //   { name: "INTERIOR CONCEPT" ,path:'Exteriorconcept'},
  //   { name: "GT50 TURBINE ENGINE" ,path:'Exteriorconcept' },
  //   { name: "GENERAL AVIATION 2.0" ,path:'Exteriorconcept'" },
  //   { name: "EXTERIORCONCEPT ,path:'Exteriorconcept'" },
  //   { name: "EXTERIORCONCEPT ,path:'Exteriorconcept'" },
  // ];
  // const foot = [
  //   { one: "BLOG",patg:'/bl' },
  //   { one: "CONTACT" },
  //   { one: "CAREERS" },
  //   { one: "FAQ" },
  // ];
  // const option = [
  //   { two: "Hill Development Centre" },
  //   { two: "Units 3 & 4 Key Pt, Towers Business Pk, Wheelhouse Road" },
  //   { two: "Rugeley, Staffordshire WS15 1UZ" },
  //   { two: "United Kingdom" },
  // ];
  

  const fd = [
    {
      title: "HX50",
      sub: [
        { name: "EXTERIOR CONCEPT",path:'/Exteriorconcept' },
        { name: "INTERIOR CONCEPT",path:'/Exteriorconcept' },
        { name: "GT50 TURBINE ENGINE ",path:'/Exteriorconcept' },
        { name: "GENERAL AVIATION 2.0",path:'/Exteriorconcept' },
        { name: "EXTERIORCONCEPT",path:'/Exteriorconcept' },
        { name: "EXTERIORCONCEPT",path:'/Exteriorconcept' },
      ],
    },
    {
      title: "HC50",
      sub: [],
    },
    {
      title: "COMPANY",
      sub: [
        { name: "BLOG", path:'/Blog'},
        { name: "CONTACT",path:'/Blog' },
        { name: "CAREERS",path:'/Blog' },
        { name: "FAQ",path:'/Blog' },
      ],
    },
    {
      title: "Address",
      sub: [
        { name: "Hill Development Centre",path:'/Adress' },
        { name: "Units 3 & 4 Key Pt, Towers Business Pk, Wheelhouse Road" ,path:'/Adress' },
        { name: "Rugeley, Staffordshire WS15 1UZ",path:'/Adress'  },
        { name: "United Kingdom",path:'/Adress'  },
      ],
    },
  ];
  return (
    <div className="bg-black">
      <div className=" border-y border-white  grid grid-cols-6 gap-3 px-10 py-14 ">
        <div className="">
          <img
            src="https://www.hillhelicopters.com/images/logo-hill-footer.svg"
            className=""
          ></img>
        </div>

        {
          fd.map((val,i)=>{
            return(
              <div className="text-xl font-extrabold    ">
              <div className="text-green-500">{val.title}</div>
              <div className="grid gap-3 pt-4">
                {val.sub.map((val, i) => {
                  return (
                    <div key={i} className="text-white hover:text-gray-300 cursor-pointer font-normal text-base ">
                    <Link to={val.path}>
                    {val.name}
                    </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            )
          })
        }
      

        {/* <div className="text-green-500 text-xl   font-extrabold  ">HC50</div> */}
        {/* <div className="text-white text-xl  font-extrabold">
          <div className="text-green-500 text-xl ">COMPANY</div>
          {foot.map((val, i) => {
            return (
              <div key={i} className="text-white font-normal text-base">
                {val.one}
              </div>
            );
          })}
        </div> */}
        {/* <div className=" text-xl  font-extrabold">
          <div className="text-green-500">ADDRESS</div>
          {option.map((val, i) => {
            return (
              <div key={i} className="text-white font-normal text-base">
                {val.two}
              </div>
            );
          })}
        </div> */}
      </div>
<div className="flex  justify-between items-center ">
  <div className=" flex gap-11 mx-11 py-10">
      <div className="text-white hover:text-gray-300 cursor-pointer">PRIVACY POLICY</div>
      <div className="text-white">2024 HELICOPTERS</div>
      </div>
      <div className=" flex gap-14 mx-11 py-10 text-2xl">
<div className="text-white "><BsFacebook /></div>
<div className="text-white"><FaInstagram /></div>
<div className="text-white"><FaYoutube /></div>
<div className="text-white"><FaXTwitter /></div>

      </div>
      </div>
    </div>
  );
}

export default Footer;
