import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "./FormControl";
const Registration = () => {
  let initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
    mode_of_contact: "",
    phone: "",
  };
  const radioOptions = [
    { key: "email", value: "Email" },
    { key: "telephone", value: "Telephone" },
  ];
  let schemaValidation = yup.object({
    email: yup.string().email().required("Required email"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Please confirm your password"),
    mode_of_contact: yup.string().required("Required contact"),
    phone: yup.string().test("ddvdv", "Required Phone", function (value) {
      const modeOfContact = this.resolve(yup.ref("mode_of_contact")); // gets value of mode_of_contact
      if (modeOfContact === "Telephone") {
        return !!value; // Return true if 'mobile_phone' and value is not empty
      }
      return true; // For any other mode_of_contact, validation is always true
    }),
  });

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValue}
        onSubmit={() => {}}
        validationSchema={schemaValidation}
      >
        {() => {
          return (
            <Form>
              <FormControl
                control="input"
                name="email"
                label="Email"
                type="email"
              />
              <FormControl
                control="input"
                name="password"
                label="Password"
                type="password"
              />
              <FormControl
                control="input"
                name="confirmPassword"
                label="Confrim Password"
                type="password"
              />
              <FormControl
                control="radioButton"
                name="mode_of_contact"
                label="Mode of Contact"
                options={radioOptions}
              />
              <FormControl
                control="input"
                name="phone"
                label="Phone"
                type="number"
              />
              <button className="submitButton" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Registration;
