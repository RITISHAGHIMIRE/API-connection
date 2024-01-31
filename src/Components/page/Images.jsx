import React from 'react'
import { Formik,Form, Field, ErrorMessage  } from 'formik'
import * as Yup from "yup";

const schema = Yup.object().shape({
  fname: Yup.string().min(5, "name must be five character").required("name is required"),
  lname: Yup.string().min(5, "name must be five character").required("name is required"),
 Confirm: Yup.string().required("Alphabets are required"),

  Email: Yup.string().email("Please provide a valid email address").required("@ is required"),
 Password: Yup.string().required("Alphabets are required"),
 Contact: Yup.number().required("Numbers are required"),
})
function Images() {
  const arrayone=[
    {label:"First name",name:"fname",type:"text",placeholder:"First name"},
    {label:"Last  name",name:"lname",type:"text",placeholder:"Last name"},

    {label:"Email",name:"Email",type:"text",placeholder:"Enter your email"},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},
    // {label:"",name:"",type:"",placeholder:""},

  ]
  return (
    <div className='bg-blue-500 flex justify-between h-full w-full ' >
    <div> WELCOME</div>
    <div>Apply as employee</div>    
    <Formik
    initialValues={{
      fname:"",
      lname:"",
      Password:"",
      Confirm:"",
      Email:"",
      Phone:"",
      Select:"",
      Answer:"",


    }}
    validationSchema={schema}
    onSubmit={(hy) => {
      console.log(hy);
      
    }}
  
    
   >

    {({handleSubmit,values,setFieldValue})=>{
      return(
        <Form className="grid lg:grid-cols-2 text-sm gap-6 px-10">
{
  arrayone.map((val,i)=>{
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

        </Form>
      )
    }}
   </Formik>
    
    </div>
   
  )
}

export default Images