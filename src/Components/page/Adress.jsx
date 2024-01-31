import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const schema=Yup.object().shape({
  name:Yup.string().min(5,'minsiddzfb').required('name is required')
})
function Adress() {
  return (
    <div className='ml-44'>
      <Formik
      initialValues={{
        name:""
      }}
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        {({handleSubmit})=>{
          return(
            <Form onSubmit={handleSubmit}>
              <div>
                <Field name='name' className='border border-red-500 ' />
                <ErrorMessage component={'div'} name='name' />
              </div>
              <button type='submit'>submit</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Adress