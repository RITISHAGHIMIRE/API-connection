import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaCloudDownloadAlt } from "react-icons/fa";
import React from "react";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

const schema = Yup.object().shape({
  fname: Yup.string().min(5, "name must be five character").required("name is required"),
  Email: Yup.string().email("Please provide a valid email address").required("@ is required"),
 Password: Yup.string().required("Alphabets are required"),
 Contact: Yup.number().required("Numbers are required"),
// upload:Yup.string().required("files are required")
});

function Learn() {
  const [value, setValue] = useState('');

  const array=[
    {label:'First name',name:'fname',type:"text",placeholder:'First number'},
    {label:'Last name',name:'lname',type:"text",placeholder:'Last number'},
    {label:'Email',name:'Email',type:"text",placeholder:'Enter your email'},
    {label:'Password',name:'Password',type:"password",placeholder:'Enter your password'},
    {label:'Contact',name:'Contact',type:"number",placeholder:'Enter your contact number'},
   



  ]
  return (
    <div className="h-full w-4/12 lg:w-6/12 shadow-md my-10 py-7  mx-auto bg-gray-900">
      <div className="text-center  py-5 text-white font-bold text-2xl">
        REGISTRATION FORM
      </div>
      <ReactQuill theme="snow" className="bg-white w-10/12 h-40 mx-auto "  value={value} onChange={setValue} />;

      <Formik
        initialValues={{
          fname: "",
          lname:"",
          Email:"",
          Password:"",
          Contact:"",
          upload:"",

        }}
        validationSchema={schema}
        onSubmit={(hy,{resetForm}) => {
          console.log(hy);
          resetForm()
        }}
      >
        {({handleSubmit,values,setFieldValue})=>{
          return(
            <Form className="grid lg:grid-cols-2 text-sm gap-6 px-10">
             {
              array.map((val,i)=>{
                return(
                  <div className="flex gap-3 items-start text-white w-full text-xm font-semibold flex-col">
                  <label>{val.label}</label>
                  <Field
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                    className="outline:none border-none text-black py-4 px-2 w-full  border-gray-500"
                  />
                  <ErrorMessage name={val.name} component={"div"} />
                </div>
                )
              })
             }
  
              {/* <div className=" text-xm w-full grid gap-3  text-white font-semibold">
              <label>Last Name</label>
                <Field
                  name="Name"
                  type="text"
                  placeholder="Last name"
                  className="outline:none border-none py-4 px-2 w-full border-gray-500"
                />
                <ErrorMessage name="Name" component={"div"} />
              </div>
            <div className="flex gap-3 items-start text-xm text-white w-full font-semibold flex-col">
              <label>Email</label>
              <Field
                name="Email"
                type="text"
                placeholder="Enter your email"
                className="outline:none border-none py-4 px-2 w-full border-gray-500"
              />
              <ErrorMessage name="Email" component={"div"} />
            </div>{" "}
            <div className="flex gap-3 items-start text-white text-xm w-full font-semibold flex-col">
              <label>Password</label>
              <Field
                name="Password"
                type="text"
                placeholder="Enter your password"
                className="outline:none border-none w-full py-4 px-2  border-gray-500"
              />
              <ErrorMessage name="Password" component={"div"} />
            </div>
  
            <div className="flex gap-3 items-start text-xm text-white  font-semibold flex-col">
              <label >Contact </label>
              <Field
                name="Contact"
                type="text"
                placeholder="Enter your contact number"
                className="outline:none border-none w-full py-4 px-2  border-gray-500"
              />
              <ErrorMessage name="Contact" component={"div"} />
            </div> */}
  <div className=" col-span-2 flex gap-3 items-start  flex-col w-auto justify-between">
    <div className=" text-white text-sm font-semibold">Certificate</div>
    <div className="grid w-full bg-gray-100">
      <input
      accept=" image/png"
      name="upload"
      id="upload"
      type="file"
      onChange={(e)=>{
        setFieldValue('upload',e.target.files[0])
      }}
      placeholder="Enter your"
      className="p-2 hidden outline-none w-auto bg-grad-500"
      />
      <ErrorMessage className="text-red-500" name="upload" component={'p'}/>
      <label htmlFor="upload">
        {
          values.upload ? <img src={URL.createObjectURL(values.upload)}/>:
          <div className="h-44 w-full text-center flex items-center justify-center text-4xl"><FaCloudDownloadAlt /></div>

        }
      </label>
    </div>

  </div>
            <input
                type="SUBMIT"
                value={"SUBMIT"}
                placeholder="Enter Message"
                className="outline:none  rounded-md bg-pink-400 text-xm font-bold text-white w-fit px-10 h-fit py-4  text-center  border-gray-500"
              />
          </Form>
          );
        }}
       
      </Formik>
    </div>
  );
}

export default Learn;
