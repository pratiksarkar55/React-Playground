import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

interface PropsType {
  label?: string;
  name?: string;
  options?: { key: string; value: string }[];
}

const Radio = (props: PropsType) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <div className="labelContainer">
        <div>
          <label htmlFor={name}>{label}</label>
        </div>
        <Field name={name}>
          {({ field }: any) => {
            console.log(field);
            return (
              options &&
              options.map((option: { key: string; value: string }) => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={option.value === field.value}
                    />
                    <label htmlFor={option.key}>{option.value}</label>
                  </React.Fragment>
                );
              })
            );
          }}
        </Field>

        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default Radio;
