import { Formik, Form } from "formik";
import * as yup from "yup";
import React from "react";
import "../App.css";
import FormControl from "./FormControl";

const FormikComponent = () => {
  const dropDownOptions = [
    { key: "Select a number", value: "" },
    { key: "11", value: "One" },
    { key: "12", value: "Two" },
  ];
  const radioOptions = [
    { key: "m", value: "Male" },
    { key: "f", value: "Female" },
  ];
  const checkboxOptions = [
    { key: "physics", value: "Physics" },
    { key: "Maths", value: "Maths" },
  ];
  let initialValue = {
    email: "",
    comments: "",
    selectOptions: "",
    radioOptions: "",
    checkbox: [],
    date: null,
  };
  let schemaValidation = yup.object({
    email: yup.string().email().required("Required email"),
    comments: yup.string().required("Required comments"),
    selectOptions: yup.string().required("Required options"),
    radioOptions: yup.string().required("Required Radio options"),
    checkbox: yup.array().required("Required checkbox"),
    date: yup.date().required("Required date").nullable(),
  });

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValue}
        validationSchema={schemaValidation}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => {
          return (
            <Form>
              <FormControl
                control="input"
                name="email"
                label="Email"
                type="email"
              />
              <FormControl
                control="textarea"
                name="comments"
                label="Comments"
              />

              <FormControl
                control="select"
                name="selectOptions"
                label="Select an age"
                options={dropDownOptions}
              />
              <FormControl
                control="radioButton"
                name="radioOptions"
                label="Select a gender"
                options={radioOptions}
              />
              <FormControl
                control="checkbox"
                name="checkbox"
                label="Select courses"
                options={checkboxOptions}
              />
              <FormControl
                control="datepicker"
                name="date"
                label="Select date"
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

export default FormikComponent;
