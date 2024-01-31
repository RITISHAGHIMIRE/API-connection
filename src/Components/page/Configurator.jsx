import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  NAME: Yup.string()
    .min(5, "name must be 5 character")
    .required("name is required"),
  Email: Yup.string().email("not email").required("@ is required"),
  Contact: Yup.number('dsds').required("number is required"),
  Password: Yup.string().required("alphabet is required"),
});

function Configurator() {
  return (
    <Formik
      initialValues={{
        NAME: "",
        Email: "",
        Contact: "",
        Password: "",
      }}
      validationSchema={schema}
      onSubmit={(hy) => {
        console.log(hy);
      }}
      >
      {({ handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-6 items-center "
          >
            <div className="text-center font-bold text-xm">
              REGISTRATION FORM
            </div>
            <Field
              name="NAME"
              type="text"
              placeholder="Enter your name"
              className="outline:none border-2 border-gray-500"
            />
            <ErrorMessage name="NAME" component={"div"} />

            <Field
              name="Email"
              type="text"
              placeholder="Enter your email"
              className="outline:none border-2 border-gray-500"
            />
            <ErrorMessage name="Email" component={"div"} />

            <Field
              name="Contact"
              type="text"
              placeholder="Enter your contact no"
              className="outline:none border-2 border-gray-500"
            />
            <ErrorMessage name="Contact" component={"div"} />

            <Field
              name="Password"
              type="text"
              placeholder="Enter your password"
              className="outline:none border-2 border-gray-500"
            />
            <ErrorMessage name="Password" component={"div"} />

            <input
              type="submit"
              value={"submit"}
              placeholder="Enter Message"
              className="outline:none border-2 border-gray-500"
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default Configurator;
