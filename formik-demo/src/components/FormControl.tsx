import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";

interface PropsType {
  name: string;
  label: string;
  type: string;
  options: Array<{ key: string; value: string }>;
}

//difference between React.ReactElement and React.ReactNode
type ControlType = { control: string };

const FormControl = (props: Partial<PropsType> & ControlType) => {
  const { control, ...rest } = props;
  const components: Record<string, React.ReactElement> = {
    input: (
      <>
        <Input {...rest} />
      </>
    ),
    textarea: (
      <>
        <TextArea {...rest} />
      </>
    ),
    select: (
      <>
        <Select {...rest} />
      </>
    ),
    radioButton: (
      <>
        <Radio {...rest} />
      </>
    ),
    checkbox: (
      <>
        <Checkbox {...rest} />
      </>
    ),
    datepicker: (
      <>
        <DatePicker {...rest} />
      </>
    ),
  };
  return components[control] || null;
};

export default FormControl;
