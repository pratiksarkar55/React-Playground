import { ErrorMessage, Field } from "formik";
import React from "react";
import "../App.css";
import TextError from "./TextError";
const Input = (props: any) => {
  const { label, name, ...rest } = props;
  return (
    <div className="labelContainer">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
