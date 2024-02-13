import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { GoRocket } from "react-icons/go";

const schema = Yup.object().shape({
  fname: Yup.string()
    .min(5, "name must be five character")
    .required("name is required"),
  lname: Yup.string()
    .min(5, "name must be five character")
    .required("name is required"),
  Confirm: Yup.string().required("Alphabets are required"),

  Email: Yup.string()
    .email("Please provide a valid email address")
    .required("@ is required"),
  Password: Yup.string().required("Alphabets are required"),
  Contact: Yup.number().required("Numbers are required"),
});
function Images() {
  const arrayone = [
    {
      label: "First name",
      name: "fname",
      type: "text",
      placeholder: "First name",
    },
    {
      label: "Last  name",
      name: "lname",
      type: "text",
      placeholder: "Last name",
    },

    {
      label: "Email",
      name: "Email",
      type: "text",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      label: "Confirm",
      name: "Confirm password",
      type: "password",
      placeholder: "Confirm your password",
    },
    {
      label: "Phone no",
      name: "  Phone",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Select your answer",
      name: "Select",
      type: "select",
      placeholder: "Select your answer",
    },
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
  ];
  return (
    <div className="bg-blue-500 flex justify-between h-full w-full ">
      <div className=" relative  items-center justify-center flex gap-11 flex-col">
      <div className="text-5xl text-center  text-white tranim transition-all duration-500 delay-100   translate-y-80 ease-in-out">
            {" "}
            <GoRocket />
          </div>
        <div className="text-3xl  text-center font-semibold text-white ">
          {" "}
          WELCOME
        </div>
        <div className="text-xl text-white relative">
      
          <div className="text-center">You are 30 sec away</div>
          <div className="text-center">from earning your own money</div>
          <div className="text-center">money!</div>
        </div>
        <button className="h-12 w-28 relative text-xl mx-40 font-bold text-gray-700 top-20 rounded-2xl bg-white">
          Login
        </button>
      </div>
      <div className="h-full  w-9/12  py-10 px-10 ">
        <div className="text-3xl bg-white font-semibold rounded-l-[200px] text-gray-700 py-6 text-center">
          Apply as employee
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              Password: "",
              Confirm: "",
              Email: "",
              Phone: "",
              Select: "",
              Answer: "",
            }}
            validationSchema={schema}
            onSubmit={(hy) => {
              console.log(hy);
            }}
          >
            {({ handleSubmit, values, setFieldValue }) => {
              return (
                <Form className="text-sm    px-28 ">
                  <div className="grid lg:grid-cols-2 gap-6 ">
                  {arrayone.map((val, i) => {
                    return (
                      <div className="flex gap-3 items-start text-white w-full text-xm font-semibold flex-col">
                        <label>{val.label}</label>
                        <Field
                          name={val.name}
                          type={val.type}
                          placeholder={val.placeholder}
                          className=" text-black outline-gray-600 py-4 px-2 w-full  border-2 "
                        />
                        <ErrorMessage name={val.name} component={"div"} />
                      </div>
                    );
                  })}
          </div>
<div className="flex gap-9 py-6">
<div><input type="radio" />Male</div>
<div><input type="radio" />Female</div>


</div>
<div className="flex justify-end ">

<button className="border-2 bg-blue-500 w-36 h-11 rounded-xl items-center text-white text-lg flex justify-center">Register</button>
</div>
                </Form>

              );
            }}
           
           
             
           
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Images;
