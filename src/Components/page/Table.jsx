import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Table() {
  const [course, setcourse] = useState([]);
  const getdata = () => {
    try {
      axios
        .get("https://hubmainback.hubit.com.np/courses")
        .then((res) => {
          console.log(res);
          setcourse([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 w-11/12 mb-10 mx-auto">
        {course.map((val, i) => {
          let images = `https://hubmainback.hubit.com.np/public/${val.image}`;
          return (
            <div
              //  style={{
              //     backgroundImage:`url(${images})`
              // }}

              className="h-full p-2 relative border shadow-lg "
            >
              <img src={images} alt="" className="h-52" />
              <div className="  grid gap-2 px-3 mt-4">
                <div className=" absolute  top-40 bg-pink-700  rounded-md shadow-md shadow-white left-3
                text-white  w-fit h-fit max-w-52 p-3 capitalize text-sm ">
                  <div className="line-clamp-1">
                  {val.category.name}
                  </div>
                </div>
                <div className="text-xm font-semibold uppercase  ">
                  {val.title}
                </div>

               {
                val.description? <div
                dangerouslySetInnerHTML={{ __html: val.description }}
                className="line-clamp-5 text-sm font-normal mb-14   "
              />:<div   className="line-clamp-5 text-sm font-normal mb-14   ">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
               }
                <div className="flex border-t text-sm w-full justify-evenly py-1 absolute left-0 bottom-0 border-gray-500">
                  {val.instructor.map((item, ind) => {
                    return <div className=" text-xm border-r p-2 text-center  w-full border-gray-500 italic">{item.name}</div>;
                  })}
                
                <div className="text-xm font-semibold w-full p-2 text-center italic">{val.duration}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Table;
