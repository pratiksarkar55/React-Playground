import { useField } from "formik";
import React from "react";

export const CustomInput: React.FunctionComponent<FieldType> = ({
  label,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  console.log(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};
