import { ErrorMessage, Field } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";
interface PropsType {
  label?: string;
  name?: string;
  options?: { key: string; value: string }[];
}
const DatePicker = (props: PropsType) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div className="labelContainer">
        <div>
          <label htmlFor={name}>{label}</label>
        </div>
        <Field name={name}>
          {({ field, form }: any) => {
            console.log("field in checkbox", field);
            const { value } = field;
            const { setFieldValue } = form;
            return (
              <ReactDatePicker
                selected={value}
                {...field}
                {...rest}
                onChange={(date) => setFieldValue(name, date?.getDate())}
              />
            );
          }}
        </Field>

        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default DatePicker;
