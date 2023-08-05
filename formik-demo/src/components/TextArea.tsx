import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const TextArea = (props: any) => {
  const { label, name, ...rest } = props;
  return (
    <div className="labelContainer">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
