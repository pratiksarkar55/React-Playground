import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = (props: any) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="labelContainer">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="select">
        {options.map((option: { key: string; value: string }) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
